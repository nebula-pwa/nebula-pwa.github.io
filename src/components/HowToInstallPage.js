import React from 'react';
import '../styles/HowToInstallPage.css';
import iphone_step1 from '../assets/iphone_step1.jpg';
import iphone_step2 from '../assets/iphone_step2.jpg';
import iphone_step3 from '../assets/iphone_step3.jpg';
import iphone_step4 from '../assets/iphone_step4.jpg';
import nebulaqrcode from '../assets/nebulaqrcode.png';

const HowToInstallPage = () => {
  return (
    <div className="installpage">
      <div className="content">
        <h1>Install Nebula PWA on Your Device</h1>
        <p>
          A <a href="https://en.wikipedia.org/wiki/Progressive_web_app" target="_blank" rel="noopener noreferrer">Progressive Web App (PWA)</a> is a web application that uses modern web technologies to provide an app-like experience to users. 
          PWAs are designed to work on any device with a compatible browser, and they can be installed on a user’s device just like a native app. 
          The key features of PWAs are their reliability, speed, and ability to work offline. 
          Nebula’s PWA gives you all the benefits of a native app without the need to download it from an app store.
        </p>
        <p>
          To fully enjoy the power of Nebula PWA and access all its features, it’s essential to install the PWA on your device. 
          Installing Nebula PWA on your device ensures you get the best experience, with quick access, smoother performance, and the ability to use it even when you’re offline.
        </p>
        <h2>How to Install Nebula PWA on Your Device?</h2>
        <p>
        Installing <a href="https://nebula-topaz-seven.vercel.app/home" target="_blank" rel="noopener noreferrer">Nebula PWA</a> on your device is a simple process that varies slightly depending on your device and operating system.
        </p>
          
        <h2>Installing Nebula PWA on iOS</h2>
        <p>
         You can use various browsers on your iOS mobile device, but for the easiest installation experience, we recommend using Safari.
        </p>
        <ul>
          <li>Open the Safari web browser on your iOS mobile device.</li>
          <li>Visit <a href="https://nebula-topaz-seven.vercel.app/home" target="_blank" rel="noopener noreferrer">Nebula PWA site</a> or scan the QR code below with your mobile device.</li>
          <li>Once the website loads, tap the Share button at the bottom center of the screen. It resembles a square with an arrow pointing upwards.</li>
          <figure className="image-container">
            <img src={iphone_step1} alt="iphone_step1" className="image" />
          </figure>
          <li>In the Share menu, locate the “Add to Home Screen” option. Tap on it.</li>
          <figure className="image-container">
            <img src={iphone_step2} alt="iphone_step2" className="image" />
          </figure>
          <li>Tap the “Add” button in the screen’s upper-right corner.</li>
          <figure className="image-container">
            <img src={iphone_step3} alt="iphone_step3" className="image" />
          </figure>
          <li>The Nebula app will now be added to your home screen as an app icon.</li>
          <li>You can launch the Nebula app by tapping its icon like any other app on your device.</li>
          <figure className="image-container">
            <img src={iphone_step4} alt="iphone_step4" className="image" />
          </figure>
        </ul>

        <h2>Installing a PWA on Android</h2>
        <p>
         You can use various browsers on your Android mobile device, but for the easiest installation experience, we recommend using Google Chrome.
        </p>
        <ul>
          <li>Open the Google Chrome browser on your Android mobile device.</li>
          <li>Visit <a href="https://nebula-topaz-seven.vercel.app/home" target="_blank" rel="noopener noreferrer">Nebula PWA site</a> or scan the QR code below with your mobile device.</li>
          <li>Once the website loads, tap the Share button at the bottom center of the screen. It resembles a square with an arrow pointing upwards.</li>
          <figure className="image-container">
            <img src={iphone_step1} alt="iphone_step1" className="image" />
          </figure>
          <li>In the Share menu, locate the “Add to Home Screen” option. Tap on it.</li>
          <figure className="image-container">
            <img src={iphone_step2} alt="iphone_step2" className="image" />
          </figure>
          <li>Tap the “Add” button in the screen’s upper-right corner.</li>
          <figure className="image-container">
            <img src={iphone_step3} alt="iphone_step3" className="image" />
          </figure>
          <li>The Nebula app will now be added to your home screen as an app icon.</li>
          <li>You can launch the Nebula app by tapping its icon like any other app on your device.</li>
          <figure className="image-container">
            <img src={iphone_step4} alt="iphone_step4" className="image" />
          </figure>
        </ul>
        
        <p>
          To get started, you can either visit the <a href="https://nebula-topaz-seven.vercel.app/home" target="_blank" rel="noopener noreferrer">Nebula PWA site</a> directly on your mobile device or scan the QR code below with your smartphone.
        </p>
        <figure className="image-container">
          <img src={nebulaqrcode} alt="nebulaqrcode" className="image" />
        </figure>

        {/* Add the disclaimer */}
        <p className="disclaimer">
          <sup>*</sup> Please note that mobile browser technologies and user interfaces are frequently updated, so the steps to add Nebula PWA to your device may vary slightly. 
          However, the overall process remains the same. If you encounter any issues, don’t hesitate to <a href="https://nebula-tech-hub.github.io/#/contact" target="_blank" rel="noopener noreferrer">contact us</a> for assistance.
        </p>
      </div>
    </div>
  );
};

export default HowToInstallPage;
