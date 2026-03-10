import subprocess
import time
import os

def test_ui():
    # Start the Next.js server in the background
    process = subprocess.Popen(["npm", "run", "dev"], stdout=subprocess.PIPE, stderr=subprocess.PIPE)

    # Wait for the server to start
    time.sleep(10)

    # Check if the server is running on port 3000
    try:
        import requests
        response = requests.get("http://localhost:3000")
        if response.status_code == 200:
            print("Server is up and running!")
            print("Content type:", response.headers.get('Content-Type'))
        else:
            print(f"Server returned status code {response.status_code}")
    except Exception as e:
        print(f"Failed to connect to server: {e}")
    finally:
        # Terminate the server
        process.terminate()

if __name__ == "__main__":
    test_ui()
