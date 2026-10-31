group = "dev.flax.secure_storage"
version = "0.0.0"

buildscript {
    repositories { google(); mavenCentral() }
    dependencies {
        classpath("com.android.tools.build:gradle:9.0.1")
    }
}
plugins { id("com.android.library") }

android {
    namespace = "dev.flax.secure_storage"
    compileSdk = 36
    defaultConfig { minSdk = 23 }
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }
}
kotlin { compilerOptions { jvmTarget = org.jetbrains.kotlin.gradle.dsl.JvmTarget.JVM_17 } }
repositories { google(); mavenCentral() }
