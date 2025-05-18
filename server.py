import http.server
import socketserver
import os

# Define the directory where your website files are located
DIRECTORY = "university-club-website"

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def translate_path(self, path):
        # Modify the path to serve files from the specified directory
        path = os.path.join(DIRECTORY, path.lstrip("index.html/Description page/DESCRIPTION.html/Payment page/pay.html/Profile page/profilepage.html/Sponsor page/spon"))
        if os.path.isdir(path) and not path.endswith('/'):
            # Automatically serve index.html if the path is a directory
            path += '/'
        if path.endswith('/'):
            path += 'index.html'
        return os.path.abspath(path)

# Set the port number
PORT = 8000

# Start the server
with socketserver.TCPServer(("", PORT), CustomHandler) as httpd:
    print(f"Serving website on http://localhost:{PORT}")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")
        httpd.shutdown()
