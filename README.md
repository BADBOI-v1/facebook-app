To obtain the values for the environment variables you mentioned, follow these steps:

### 1. **FACEBOOK_CLIENT_ID and FACEBOOK_CLIENT_SECRET**

To get these values, you need to create a Facebook App. Here’s how:

1. **Create a Facebook Developer Account**:
   - Go to [Facebook Developers](https://developers.facebook.com/).
   - Log in with your Facebook account or create a new one if necessary.
   - Accept the Facebook Platform Policy.

2. **Create a New App**:
   - Click on “My Apps” in the top right corner.
   - Select “Create App.”
   - Choose an app type (e.g., “For Everything Else”).
   - Enter the required information (App Name, Contact Email, and purpose).
   - Click “Create App ID.”

3. **Obtain App ID and App Secret**:
   - In the App Dashboard, navigate to the “Settings” > “Basic” section.
   - Here, you will find your **App ID** (which is your `FACEBOOK_CLIENT_ID`).
   - Click “Show” next to the **App Secret** and enter your Facebook password to view it (which is your `FACEBOOK_CLIENT_SECRET`).

### 2. **SESSION_SECRET**

The `SESSION_SECRET` is a key used to sign and encrypt session cookies. You can generate a secure random string for this purpose:

1. **Generate a Secure Secret**:
   - Use a password manager or a tool like `openssl` to generate a random string.
   - For example, you can use the command:
     ```bash
     openssl rand -base64 32
     ```
   - This will generate a random base64 string you can use as your `SESSION_SECRET`.

2. **Set Your Session Secret**:
   - Copy the generated string and save it in your environment configuration file (`.env` or similar).

### 3. **MONGODB_URI**

To obtain the `MONGODB_URI`, you need to set up a MongoDB instance. If you're using a cloud service like MongoDB Atlas, follow these steps:

1. **Create a MongoDB Atlas Account**:
   - Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
   - Sign up for an account or log in if you already have one.

2. **Create a New Cluster**:
   - Follow the instructions to create a new cluster (free tier is available).

3. **Obtain Connection String**:
   - In the Atlas dashboard, go to your cluster and click “Connect.”
   - Choose “Connect Your Application.”
   - Copy the connection string provided. It will look something like:
     ```plaintext
     mongodb+srv://<username>:<password>@cluster0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
     ```
   - Replace `<username>`, `<password>`, and `myFirstDatabase` with your actual database username, password, and database name.

4. **Set Your MongoDB URI**:
   - Save the connection string in your environment configuration file (`.env` or similar) as `MONGODB_URI`.

### Summary

- **FACEBOOK_CLIENT_ID** and **FACEBOOK_CLIENT_SECRET**: Obtain from Facebook Developer App.
- **SESSION_SECRET**: Generate a secure random string.
- **MONGODB_URI**: Obtain from your MongoDB instance (Atlas or local).

Be sure to keep all these secrets safe and never expose them in public repositories. Use environment variables or a secrets management tool to keep them secure.
