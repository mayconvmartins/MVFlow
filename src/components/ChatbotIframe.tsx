"use client";

import { useEffect } from 'react';

const ChatbotIframe = () => {
  useEffect(() => {
    const iframe = document.createElement('iframe');
    const iframeStyles = (styleString: string) => {
      const style = document.createElement('style');
      style.textContent = styleString;
      document.head.append(style);
    };

    iframeStyles(`
      .chat-frame {
        position: fixed;
        bottom: 20px;
        right: 20px;
        border: none;
        z-index: 999;
        max-width: 350px;
        max-height: 646px;
        border-radius: 10px;
      }
    `);

    iframe.src = "https://jj-smartrep.vercel.app/chatbot";
    iframe.classList.add('chat-frame');
    document.body.appendChild(iframe);

    const handleMessage = (event: MessageEvent) => {
      // handle message
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
      if (document.body.contains(iframe)) {
        document.body.removeChild(iframe);
      }
    };
  }, []);

  return null;
};

export default ChatbotIframe;