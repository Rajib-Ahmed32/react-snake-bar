# Custom Snackbar Context in React

If you want to display alert messages in your React application, you can use this **Custom SnackbarContext** component. It uses Material UI's `Snackbar` and `Alert` components to show messages in a styled popup. This context provides an easy-to-use method for triggering Snackbar messages from anywhere in your app.

### How the `SnackbarContext` works

The `SnackbarContext` component creates a **global Snackbar provider** that can be accessed throughout your application.

### `SnackbarState` Type Definition
The `SnackbarState` structure contains the following properties:
- **open** (`boolean`): Indicates whether the Snackbar is visible or not.
- **message** (`string`): The message that will be displayed in the Snackbar.
- **severity** (`string`): Defines the severity level of the message, such as "success", "error", "info", or "warning".

### Key Components

#### 1. `SnackbarContext`
The `SnackbarContext` is created using `React.createContext()` to share the state and functions for managing the Snackbar across your application.

#### 2. `useSnackbar`
A custom hook that uses `useContext` to allow any component to trigger or close the Snackbar message.

#### 3. `SnackbarProvider`
The provider component holds the state for the Snackbar, including the message, visibility (`open`), and severity. It uses the `Snackbar` and `Alert` components from Material UI to display the message.

- **`triggerSnackbar(message, severity)`**: A function that updates the `snackbar` state to show a message with a given severity.
- **`closeSnackbar`**: A function to close the Snackbar manually.

### How It Works

- **`useSnackbar`**: Components can use this hook to trigger a Snackbar message or close it. The `triggerSnackbar` function is passed the message and severity, which updates the global state of the Snackbar.
  
- **Snackbar Auto-hide**: The Snackbar will automatically hide after 2 seconds, or it can be manually closed by calling the `closeSnackbar` function.

### Example Usage

1. **Wrap your application with the `SnackbarProvider`**

```jsx
<SnackbarProvider>
  <App />
</SnackbarProvider>
