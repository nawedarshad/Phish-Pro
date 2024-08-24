# Phish-Pro

Phish Pro is a phishing website designed to help users identify and avoid phishing attacks. This platform provides a safe environment to learn about various phishing techniques and how to protect against them.

## Table of Contents

- [Installation](#installation)
- [Running the Website](#running-the-website)
- [Using ngrok](#using-ngrok)
- [Contributing](#contributing)
- [License](#license)

## Installation

### Prerequisites

- [nodejs]
- [ngrok]

### Step 1: Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/nawedarshad/Phish-Pro.git
cd Phish-Pro
```

### Step 2: Install Dependencies

Install the required dependencies:

```bash
install node.js
```

### Step 3: Opening Website

```bash
node server.js
```

### Step 4: Ngrok
Open Diffrent Terminal in the same location and tye

```bash
ngrok.exe
```

### Step 5: Connect your agent to your ngrok account
Now that the ngrok agent is installed, let's connect it to your ngrok Account. If you haven't already, sign up (or log in) to the ngrok Dashboard and get your Authtoken. The ngrok agent uses the authtoken (sometimes called tunnel credential) to log into your account when you start a tunnel.

Copy the value and run this command to add the authtoken in your terminal.
```bash
ngrok config add-authtoken TOKEN
```
### Step 6: Start ngrok
Start ngrok by running the following command.
```bash
ngrok http 3000
```

### Step 7: Share the Link

Once `ngrok` is running, it will provide a forwarding URL (e.g., `http://randomstring.ngrok.io`). You can share this link with others to access your phishing practice website remotely.

When the user Types something on the website it will reflect in the server.js Terminal

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository, make your changes, and submit a pull request. Make sure to follow the [code of conduct](CODE_OF_CONDUCT.md) and ensure your code follows the project's style guidelines.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
This Project is still under Development.
Feel free to modify any sections to better fit your project's needs!
