"""Serve the local comparison and accept only its browser evidence files."""
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import re

root = Path('.local/canvas-native/afterglow').resolve()


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(root), **kwargs)

    def do_POST(self):
        if not re.fullmatch(r'/(browser-(bloom|orbit|weave)-(crisp|soft)\.png|afterglow-browser\.json)', self.path):
            self.send_error(400)
            return
        length = int(self.headers.get('Content-Length', '0'))
        if not 0 < length < 5_000_000:
            self.send_error(413)
            return
        (root / self.path[1:]).write_bytes(self.rfile.read(length))
        self.send_response(204)
        self.end_headers()


server = ThreadingHTTPServer(('127.0.0.1', 0), Handler)
print(f'http://127.0.0.1:{server.server_port}/', flush=True)
server.serve_forever()
