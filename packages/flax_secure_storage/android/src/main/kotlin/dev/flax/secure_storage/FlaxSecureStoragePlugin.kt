package dev.flax.secure_storage

import android.content.Context
import android.os.Handler
import android.os.Looper
import android.security.keystore.KeyGenParameterSpec
import android.security.keystore.KeyPermanentlyInvalidatedException
import android.security.keystore.KeyProperties
import android.security.keystore.UserNotAuthenticatedException
import android.system.Os
import android.system.OsConstants
import io.flutter.embedding.engine.plugins.FlutterPlugin
import io.flutter.plugin.common.MethodCall
import io.flutter.plugin.common.MethodChannel
import java.io.File
import java.io.FileOutputStream
import java.security.KeyStore
import java.util.UUID
import java.util.concurrent.Executors
import javax.crypto.AEADBadTagException
import javax.crypto.Cipher
import javax.crypto.KeyGenerator
import javax.crypto.SecretKey
import javax.crypto.spec.GCMParameterSpec

class FlaxSecureStoragePlugin : FlutterPlugin, MethodChannel.MethodCallHandler {
    companion object {
        // Serializes file operations across Flutter engines in this process.
        private val worker = Executors.newSingleThreadExecutor()
        private val rootPattern = Regex("^[a-f0-9]{64}$")
        private val keyPattern = Regex("^v1_[a-f0-9]{64}_[a-f0-9]{64}$")
        private const val MAX_BYTES = 2 * 1024 * 1024
    }
    private lateinit var context: Context
    private lateinit var channel: MethodChannel
    private val main = Handler(Looper.getMainLooper())

    override fun onAttachedToEngine(binding: FlutterPlugin.FlutterPluginBinding) {
        context = binding.applicationContext
        channel = MethodChannel(binding.binaryMessenger, "dev.flax.secure_storage")
        channel.setMethodCallHandler(this)
    }
    override fun onDetachedFromEngine(binding: FlutterPlugin.FlutterPluginBinding) {
        channel.setMethodCallHandler(null)
    }

    override fun onMethodCall(call: MethodCall, result: MethodChannel.Result) {
        worker.execute {
            try {
                val namespace = call.argument<String>("namespace") ?: error("Invalid namespace")
                require(rootPattern.matches(namespace))
                val directory = File(context.noBackupFilesDir, "flax_secure_storage/$namespace")
                if (!directory.isDirectory && !directory.mkdirs()) throw java.io.IOException("Create storage")
                Os.chmod(directory.path, 448)
                val alias = "dev.flax.secure_storage.$namespace"
                val key by lazy { secret(alias, directory) }
                val name = call.argument<String>("key")
                if (name != null) require(keyPattern.matches(name))
                val value: Any? = when (call.method) {
                    "initialize" -> { key; null }
                    "keys" -> directory.listFiles()?.filter { keyPattern.matches(it.name) }?.map { it.name }
                        ?: throw java.io.IOException("List storage")
                    "read" -> {
                        require(name != null)
                        val file = File(directory, name)
                        if (!file.exists()) null else {
                            if (file.length() > MAX_BYTES) throw SecurityException("Oversize record")
                            decrypt(file.readBytes(), key, "$namespace\u0000$name").toString(Charsets.UTF_8)
                        }
                    }
                    "write" -> {
                        require(name != null)
                        val bytes = (call.argument<String>("value") ?: error("Missing value")).toByteArray(Charsets.UTF_8)
                        require(bytes.size <= MAX_BYTES)
                        write(directory, name, encrypt(bytes, key, "$namespace\u0000$name"))
                        null
                    }
                    "delete" -> {
                        require(name != null)
                        val file = File(directory, name)
                        if (file.exists() && !file.delete()) throw java.io.IOException("Delete storage")
                        syncDirectory(directory)
                        null
                    }
                    else -> throw UnsupportedOperationException()
                }
                main.post { result.success(value) }
            } catch (error: Exception) {
                val reason = when (error) {
                    is UserNotAuthenticatedException -> "locked"
                    is AEADBadTagException, is KeyPermanentlyInvalidatedException, is SecurityException -> "integrityFailure"
                    is UnsupportedOperationException -> "unsupported"
                    else -> "ioFailure"
                }
                // Native paths and secret contents never enter error messages.
                main.post { result.error(reason, "Secure storage operation failed", null) }
            }
        }
    }

    private fun secret(alias: String, directory: File): SecretKey {
        val store = KeyStore.getInstance("AndroidKeyStore").apply { load(null) }
        val existing = store.getKey(alias, null)
        if (existing != null) return existing as SecretKey
        if (directory.listFiles()?.any { keyPattern.matches(it.name) } != false) {
            throw SecurityException("Missing key for existing records")
        }
        val generator = KeyGenerator.getInstance(KeyProperties.KEY_ALGORITHM_AES, "AndroidKeyStore")
        generator.init(KeyGenParameterSpec.Builder(alias, KeyProperties.PURPOSE_ENCRYPT or KeyProperties.PURPOSE_DECRYPT)
            .setKeySize(256)
            .setBlockModes(KeyProperties.BLOCK_MODE_GCM)
            .setEncryptionPaddings(KeyProperties.ENCRYPTION_PADDING_NONE)
            .setUserAuthenticationRequired(false)
            .build())
        return generator.generateKey()
    }

    private fun encrypt(value: ByteArray, key: SecretKey, address: String): ByteArray {
        val cipher = Cipher.getInstance("AES/GCM/NoPadding")
        cipher.init(Cipher.ENCRYPT_MODE, key)
        cipher.updateAAD(address.toByteArray(Charsets.UTF_8))
        check(cipher.iv.size == 12)
        return byteArrayOf(1) + cipher.iv + cipher.doFinal(value)
    }
    private fun decrypt(value: ByteArray, key: SecretKey, address: String): ByteArray {
        if (value.size < 29 || value[0] != 1.toByte()) throw SecurityException("Invalid record")
        val cipher = Cipher.getInstance("AES/GCM/NoPadding")
        cipher.init(Cipher.DECRYPT_MODE, key, GCMParameterSpec(128, value.copyOfRange(1, 13)))
        cipher.updateAAD(address.toByteArray(Charsets.UTF_8))
        return cipher.doFinal(value.copyOfRange(13, value.size))
    }

    private fun write(directory: File, name: String, value: ByteArray) {
        val temporary = File(directory, ".${UUID.randomUUID()}.tmp")
        try {
            FileOutputStream(temporary).use { stream ->
                Os.fchmod(stream.fd, 384)
                stream.write(value)
                stream.fd.sync()
            }
            Os.rename(temporary.path, File(directory, name).path)
            syncDirectory(directory)
        } finally {
            if (temporary.exists()) temporary.delete()
        }
    }
    private fun syncDirectory(directory: File) {
        val descriptor = Os.open(directory.path, OsConstants.O_RDONLY, 0)
        try { Os.fsync(descriptor) } finally { Os.close(descriptor) }
    }
}
