import http.server
import socketserver
import os
import sys

PORT = 5000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

if __name__ == '__main__':
    # Allow address reuse
    socketserver.TCPServer.allow_reuse_address = True
    try:
        with socketserver.TCPServer(('127.0.0.1', PORT), Handler) as httpd:
            print(f"Wedding Invitation Server running at http://localhost:{PORT}/")
            print(f"Open invite directly: http://localhost:{PORT}/")
            print(f"Or via file: http://localhost:{PORT}/index.html")
            sys.stdout.flush()
            httpd.serve_forever()
    except Exception as e:
        print("Server error:", e)
