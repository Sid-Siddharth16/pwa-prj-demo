import { useState, useEffect } from 'react';
import NotificationComponent from './components/NotificationComponent';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdWifi, MdWifiOff } from "react-icons/md";



function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [isInstalled, setIsInstalled] = useState(
    localStorage.getItem('pwaInstalled') === 'true'
  );
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [statusTime, setStatusTime] = useState<string>("");

  useEffect(() => {
    const handleOnlineStatus = () => {
      const currentStatus = navigator.onLine;
      setIsOnline(currentStatus);
      const timestamp = new Date().toLocaleTimeString();
      setStatusTime(timestamp);
      toast.info(`You are now ${currentStatus ? 'online' : 'offline'} at ${timestamp}`);
    };

    window.addEventListener('online', handleOnlineStatus);
    window.addEventListener('offline', handleOnlineStatus);

    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
    }

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    });

    return () => {
      window.removeEventListener('online', handleOnlineStatus);
      window.removeEventListener('offline', handleOnlineStatus);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response: ${outcome}`);
    setDeferredPrompt(null);

    if (outcome === 'accepted') {
      setIsInstalled(true);
      localStorage.setItem('pwaInstalled', 'true');
      toast.success('App installed successfully!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-100 via-blue-50 to-purple-100 p-6">
      <ToastContainer />
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">🚀 React PWA Demo</h1>

        <div className="flex items-center justify-center mb-4 gap-2">
  {isOnline ? (
    <>
      <MdWifi className="text-green-500 text-xl" />
      <p className="text-green-700 font-medium">Online</p>
    </>
  ) : (
    <>
      <MdWifiOff className="text-red-500 text-xl" />
      <p className="text-red-700 font-medium">Offline</p>
    </>
  )}
</div>


        {statusTime && (
          <p className="text-center text-gray-500 text-sm mb-4">
            Last status update: {statusTime}
          </p>
        )}

        <div className="mb-6 text-gray-700 leading-relaxed">
          <p>
            This is a ✨ Progressive Web App ✨ built with React + TypeScript + Vite. It supports offline usage, push notifications, and can be installed on your device for a native feel.
          </p>
        </div>

        <NotificationComponent />

        {!isInstalled && deferredPrompt && (
          <div className="mt-6 text-center">
            <button
              onClick={handleInstallClick}
              className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-600 hover:to-indigo-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-300"
            >
              📲 Install App
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
