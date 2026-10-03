$ErrorActionPreference = 'Stop'
$arch = if ($env:RUNNER_ARCH -eq 'ARM64') { 'arm64' } else { 'x64' }
$cdb = "${env:ProgramFiles(x86)}\Windows Kits\10\Debuggers\$arch\cdb.exe"
if (!(Test-Path $cdb)) {
    # Extract the official debugger payload without Store registration or winget.
    $root = Join-Path $env:RUNNER_TEMP 'flax-windbg-1.2606.22001.0'
    New-Item -ItemType Directory -Force $root | Out-Null
    $bundle = Join-Path $root 'windbg.msixbundle'
    curl.exe --fail --location --retry 2 --max-time 600 --output $bundle 'https://windbg.download.prss.microsoft.com/dbazure/prod/1-2606-22001-0/windbg.msixbundle'
    if ($LASTEXITCODE -ne 0) { throw 'Debugger download failed' }
    $zip = [System.IO.Compression.ZipFile]::OpenRead($bundle)
    $msix = Join-Path $root 'debugger.msix'
    try {
        $entry = $zip.GetEntry("windbg_win-$arch.msix")
        if ($null -eq $entry) { throw "Missing debugger package for $arch" }
        [System.IO.Compression.ZipFileExtensions]::ExtractToFile($entry, $msix, $true)
    } finally { $zip.Dispose() }
    $prefix = if ($arch -eq 'x64') { 'amd64/' } else { 'arm64/' }
    $zip = [System.IO.Compression.ZipFile]::OpenRead($msix)
    try {
        foreach ($entry in $zip.Entries) {
            if (!$entry.FullName.StartsWith($prefix) -or $entry.FullName.EndsWith('/')) { continue }
            $destination = [System.IO.Path]::GetFullPath((Join-Path $root $entry.FullName))
            if (!$destination.StartsWith("$root\", [System.StringComparison]::OrdinalIgnoreCase)) { throw 'Invalid debugger archive path' }
            New-Item -ItemType Directory -Force (Split-Path $destination) | Out-Null
            [System.IO.Compression.ZipFileExtensions]::ExtractToFile($entry, $destination, $true)
        }
    } finally { $zip.Dispose() }
    Remove-Item $bundle, $msix
    $cdb = Join-Path $root "${prefix}cdb.exe"
}
if (!(Test-Path $cdb)) { throw "CDB unavailable: $cdb" }
& $cdb -version
if ($LASTEXITCODE -ne 0) { throw 'CDB could not start' }
"FLAX_WINDOWS_CDB=$cdb" >> $env:GITHUB_ENV
"FLAX_WINDOWS_CRASH_DIR=$env:GITHUB_WORKSPACE\build\platform\windows-$arch\ci" >> $env:GITHUB_ENV
