import React from 'react'
import './projectidea.css'

const ProjectIdea = () => {
  return (
    <section id='projectidea'>
      <div className='projectidea'>
        <div className="projectidea-content">
          <h1>DuckyPass</h1>
          <h5>Our Project Idea.</h5>
          <div className='projectidea-body'>
            <p>
              The Raspberry Pi Pico-based USB password manager, called DuckyPass, is a compact and portable device that allows users to securely store and manage their passwords on a USB drive. This device is designed to provide added security and control over password data, as well as convenience and efficiency. It is an ideal solution for people who have multiple online accounts and need to regularly access and update their passwords. DuckyPass is based on the Raspberry Pi Pico, a low-cost, high-performance microcontroller board that provides the power and versatility needed for this device (Raspberry Pi Ltd, 2022). The device is programmed using DuckyScript, a simple scripting language that allows users to easily access their passwords from any computer. With DuckyScript users can automate complex login processes, and the added security measures such as encryption, physical security, and Bluetooth integration provide added protection against unauthorized access and data breaches. 
            </p><br></br>
            <p>
              The device is designed to be small and portable, making it convenient to carry around on a keychain or in a pocket, which is particularly useful when traveling or when using a public computer. With DuckyPass users can access their passwords from any device with a USB port, providing greater convenience than web-based password managers, which require an internet connection. DuckyPass is a secure and efficient password manager that offers a combination of portability, customization, and security that makes it a better option than cloud-based services, such as LastPass, which has recently been breached (University of Washington, 2022). It provides added peace of mind and protection for sensitive information, and its customizable feature based on DuckyScript makes it more efficient than a generic password manager.
            </p><br></br>
            <p>
              The primary motivation for using a Raspberry Pi Pico-based USB password manager like DuckyPass over web-based password managers is the added security and control it provides. With a USB password manager, your passwords are stored locally on a physical device, rather than on a remote server. This means that you have complete control over your password data and are not at risk of it being accessed by unauthorized individuals. 
            </p><br></br>
            <p>
              Additionally, a USB password manager is portable and can be easily accessed from any computer, providing greater convenience than web-based password managers which require an internet connection. This can be particularly useful for people who have multiple online accounts and need to regularly access and update their passwords. Another motivation for using DuckyPass is the increasing number of data breaches happening around the world, with approximately 50 million Australians being involved in data theft in 2020 (Sobers, 2022). These breaches have highlighted the importance of protecting personal and sensitive information and using a USB password manager like DuckyPass can provide peace of mind and protect against potential breaches. 
            </p><br></br>
            <p>
              DuckyPass is designed with security in mind, it includes a password protection system to prevent unauthorized access to the stored passwords. It also includes the feature of encrypting stored passwords for added security. Lastly, DuckyPass's small size and low power consumption, combined with its high resistance to tampering and hacking attempts, would make the password manager highly secure, providing greater protection than a cloud-based password manager like LastPass. This makes DuckyPass an ideal solution for people who prioritize security and control over their password data and want to protect against potential breaches.
            </p><br></br>
            <p>
              The DuckyPass device also comes with a phone app which allows users to easily access and manage their stored passwords from their mobile device. The app uses Bluetooth to connect to the device, and once connected, users can view and edit their stored passwords. The app also includes a feature that allows users to select and enter passwords automatically using the paired device's interface, eliminating the need to physically interact with the DuckyPass device every time a new password needs to be entered. This provides added convenience and flexibility for the user, as they can access their passwords from any device with Bluetooth capabilities and a paired app.  The features of the combination of these 2 include:
            </p><br></br>
            <ul>
              <li>Storing multiple passwords: The DuckyPass device can store multiple passwords, allowing users to use it for different accounts and websites.</li>
              <li>Entering passwords automatically: When a password is selected, the device can automatically enter the password on the connected computer using the DuckyScript.</li>
              <li>Bluetooth integration: The device can be connected to a phone app using Bluetooth, which enables the user to access their passwords from the device or the phone app.</li>
              <li>Password protection/2FA: The device will use a password protection system to prevent unauthorized access to the stored passwords, using the phone app with Bluetooth integration.</li>
              <li>Customizable feature based on DuckyScript: the device can be tailored to specific needs by creating custom scripts to automate complex login processes.</li>
              <li>Portable: The small size and low power consumption of the device, makes it easy to carry around on a keychain or in a pocket.</li>
              <li>Tampering and hacking resistance: The device is designed to be resistant to tampering and hacking attempts, providing greater protection than a cloud-based password manager.</li>
              <li>Session Token System for user authentication: The device can use a session token system for user authentication, which allows users to verify their identity and receive a unique access token.</li>
              <li>Symmetric Encryption Algorithm: AES algorithm is used to encrypt and decrypt passwords, so the passwords are safe from unauthorized access.</li>
              <li>Remote wipe capability: The device can have a feature that enables the owner to remotely wipe out all the stored passwords in case the device is lost or stolen.</li>
            </ul><br></br>
            <p>
              One of the key features of DuckyPass is its ability to encrypt stored passwords for added security. Passwords are encrypted using AES. AES (Advanced Encryption Standard) is a symmetric encryption algorithm that is widely used to encrypt sensitive data. It uses a fixed block size of 128 bits and a key size of 128, 192, or 256 bits to encrypt and decrypt data (Crawford et al., 2019). AES is considered to be a very secure encryption algorithm and is used in a variety of applications, including the protection of sensitive government and military communications. Using AES is a common method in password management systems for encrypting and decrypting passwords. It uses a single key for both encryption and decryption, meaning that both the sender and receiver must have the pre-shared secret key to access the stored passwords. This means that DuckyPass and the paired device will only communicate with each other if they have the correct authentication key, preventing unauthorized devices from accessing the stored passwords.
            </p><br></br>
            <p>
              In addition to password encryption, DuckyPass also employs a session token system for user authentication.  “Token-based authentication is a protocol which allows users to verify their identity, and in return receive a unique access token. During the life of the token, users then access the website or app that the token has been issued for, rather than having to re-enter credentials each time they go back to the same webpage, app, or any resource protected with that same token. Auth tokens work like a stamped ticket. The user retains access as long as the token remains valid. Once the user logs out or quits an app, the token is invalidated.” (Okta Australia, n.d.). The first factor is a passphrase that is set by the user during the initial setup of the DuckyPass device. The passphrase is required to be entered on the DuckyPass device every time the user wants to access their passwords. The second factor is the DuckyPass application, which will be installed on a smartphone that the user has to have in their possession. The DuckyPass device generates a unique session token, which is sent to the user's smartphone via the DuckyPass app. To access their password, the user must enter the session token in the DuckyPass app on their smartphone. This process ensures that even if someone physically gets hold of the DuckyPass device, they would not be able to access the password without the session token, which can only be generated by the DuckyPass device and received by the DuckyPass app on the user's phone. Additionally, the DuckyPass app can also have a feature to remotely invalidate all active tokens in case the phone is lost or stolen.
            </p><br></br>
            <p>
              DuckyPass offers several advantages over other USB password managers such as OnlyKey. Firstly, DuckyPass uses Bluetooth as an interface, allowing users to access the stored passwords through a phone app, rather than using physical buttons on the device. This provides added convenience and flexibility for the user, as they can access their passwords from any device with Bluetooth capabilities and a paired app. OnlyKey, on the other hand, relies on physical buttons to select and enter passwords, which can be less convenient for users being a lot harder to keep private. Secondly, DuckyPass includes session authentication, similar to what is used by hardware crypto wallets like Trezor, to verify the authenticity of the user and the device before allowing access to the stored passwords (SatoshiLabs Group, n.d.). OnlyKey uses a PIN code for authentication, which may not be as secure as session authentication. Thirdly, DuckyPass is customizable, allowing users to create custom scripts to automate complex login processes and tailor the password manager to their specific needs, making it more efficient than a generic password manager. OnlyKey does not offer this level of customization. Lastly, DuckyPass is small and has low power consumption, which makes it portable and easy to carry around, and it also has a high resistance to tampering and hacking attempts, providing greater protection than OnlyKey. In summary, DuckyPass, the Raspberry Pi Pico-based USB password manager, offers several advantages over a product like OnlyKey (CryptoTrust, n.d.).
            </p><br></br>
            <p>
              Beyond the specific features that DuckyPass offers, the production of this device can provide a number of benefits to password safety. One of the main benefits is that it allows users to have complete control over their password data, as it is stored locally on a physical device and not on a remote server. This eliminates the risk of data breaches caused by hacking or unauthorized access to remote servers where web-based password managers store the data. Additionally, DuckyPass can also improve the security of users' password data by providing offline access, meaning that the user can access the stored passwords even in case of a lack of internet connection, which can be useful when travelling or in case of a network outage. 
            </p><br></br>
            <p>
              Another benefit of DuckyPass is that it can improve the overall user experience when managing passwords. With the ability to automate complex login processes, users can log in to multiple accounts with ease, this can save a lot of time and effort, as well as reducing the risk of user error when entering passwords. Furthermore, the device's small size and portability make it easy to carry around and can be accessed from any device with a USB port, which increases the convenience and flexibility of the device. Additionally, DuckyPass can also benefit password safety by providing a layer of physical security, as the device is designed to be tamper-proof, this means that it is highly resistant to hacking attempts and physical tampering. This added layer of physical security can provide added peace of mind for users, knowing that their password data is protected not only by software security measures but also by hardware measures.
            </p><br></br>
            <p>
              The DuckyPass project is a complex undertaking that requires a variety of tools and skills. To develop DuckyPass, the following tools will be required:
            </p><br></br>
            <ul>
              <li>Raspberry Pi Pico: The device will be based on the Raspberry Pi Pico, a low-cost, high-performance microcontroller board that provides the power and versatility needed for the device.</li>
              <li>DuckyScript: DuckyScript is a simple scripting language that allows users to easily access their passwords. The device will be programmed using DuckyScript.</li>
              <li>Micro-USB cable: A Micro-USB cable is needed to connect the Raspberry Pi Pico to a computer for programming and testing.</li>
              <li>Bluetooth Receiver: A Bluetooth receiver will be integrated into the device to allow for wireless communication with the mobile app, allowing for remote access and management of the stored passwords.</li>
              <li>Text editor: A text editor will be used to write and edit the scripts in DuckyScript.</li>
              <li>Encryption algorithms: AES is a symmetric encryption algorithm that will be used to encrypt and decrypt the passwords stored in the device.</li>
              <li>Phone App development tools: We will need to develop a mobile app that communicates with the device via Bluetooth, the app will be developed using a mobile app development tool such as React Native.</li>
              <li>Integrated Development Environment (IDE): An IDE such as Visual Studio Code, PyCharm, or Thonny will be used for coding and debugging the DuckyScript and CircuitPython.</li>
              <li>PCB design tools: The team will need to design the circuit board for the device, using tools such as Eagle PCB (Autodesk Inc., 2022).</li>
              <li>Circuit simulation tools: The team can use simulation tools such as LTSpice to simulate the circuit before building the prototype (Analogue Devices Inc., n.d.).</li>
              <li>Project management tools: The team will use project management tools such as Trello to organize and track the progress of the development (Trello, n.d.).</li>
            </ul><br></br>
            <p>
              To develop DuckyPass, the following skills will be required:
            </p><br></br>
            <ul>
              <li>Programming: The development team will need to have a good understanding of programming in Python and C/C++, as well as DuckyScript and CircuitPython.</li>
              <li>PCB design: The team will need to have knowledge of circuit design and experience with PCB layout tools like Eagle PCB.</li>
              <li>Microcontroller programming: Experience with programming microcontrollers, specifically the Raspberry Pi Pico, will be needed to program and control the device.</li>
              <li>Encryption: The team will need to develop a good understanding of encryption algorithms, specifically AES, and experience in implementing them in software.</li>
              <li>Mobile App development: The team will need to have knowledge in mobile app development, specifically in React Native.</li>
              <li>Bluetooth communication: The team will need to have experience in implementing Bluetooth communication in software, to allow for wireless communication between the device and the mobile app.</li>
              <li>Project management: The team will need to have experience in managing and organizing a development project and using project management tools such as Trello.</li>
              <li>Circuit simulation: Familiarity with circuit simulation tools such as LTSpice will be needed to simulate the circuit before building the prototype.</li>
              <li>Debugging: The team will need to have experience in debugging software and hardware issues, to ensure the device is functioning properly.</li>
              <li>Technical documentation: The team will need to have experience in creating technical documentation, such as user manuals, to ensure the device is easy to use and understand for the end-user.</li>
            </ul><br></br>
            <p>
              The DuckyPass project requires a combination of technical skills and knowledge, such as hardware, software, encryption, security, and microcontroller programming, as well as project management skills to plan and organize the development process. The development team should work towards gaining experience in app development and circuit design. The combination of all these skills and tools are necessary to ensure that the final product is a secure, efficient, and user-friendly password manager that can provide added peace of mind and protection for sensitive information.
            </p><br></br>
            <p>
              This project is feasible, though if the necessary hardware components are acquired, the feasibility of the project increases significantly. However, feasibility of the project still depends on other factors such as the availability of the software tools and the expertise of the development team. The DuckyScript language and encryption algorithms are open-source and readily available, so the team won’t have to invest much time to learn and obtain them. However, the team should work towards gaining the expertise in using these tools and knowledge on how to implement them in the project to ensure the security of the stored passwords. The development team should also work towards developing an understanding of app development, circuit design, and project management. 
            </p><br></br>
            <p>
              One important aspect that should not be overlooked is the testing and quality assurance of the device, to make sure that the final product is secure, reliable, and user-friendly. Additional resources, such as testing equipment and professional expertise in testing and quality assurance, may need to be obtained. Finally, it's important to consider the market demand for this kind of device, and the competition. The password manager market is quite crowded and it's important to do research on the target market, to be aware of potential competitors and to understand the needs and preferences of the target audience.
            </p><br></br>
            <p>
              If the DuckyPass project is successful, the outcome will be a compact and portable device that allows users to securely store and manage their passwords on a USB drive. The original problem of managing multiple online accounts and needing to regularly access and update passwords will be solved by the DuckyPass device. With the device, users will have the ability to store their passwords locally on a physical device and easily access them from any computer. Additionally, the device's portability will allow users to access their passwords even when traveling or using a public computer. The development of the DuckyPass device will have a significant impact on the password management market. It provides a convenient and secure alternative to web-based password managers, which typically require an internet connection and are at risk of data breaches. The device's customizable feature based on DuckyScript and added security measures will also set it apart from generic password managers. With the increasing number of data breaches happening around the world, the development of DuckyPass will provide peace of mind and protection for sensitive information.
            </p>
          </div>
          <div className='projectidea-references'>
            <h2>
              References
            </h2>
            <p>Raspberry Pi Ltd (2022) <i>Raspberry pi documentation, Raspberry Pi Pico and Pico W.</i> Available at: https://www.raspberrypi.com/documentation/microcontrollers/raspberry-pi-pico.html (Accessed: December 2022).</p>
            <p>Hak5 LLC (2010) <i>DuckyScript™ Quick Reference, DuckyScript™ Quick Reference - USB Rubber Ducky.</i> Available at: https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference (Accessed: December 2022). </p>
            <p>Pyca (n.d.) <i>PYCA/Cryptography: Cryptography is a package designed to expose cryptographic primitives and recipes to python developers., GitHub.</i> Available at: https://github.com/pyca/cryptography (Accessed: December 2022). </p>
            <p>CircuitPython (n.d.) <i>Circuitpython¶, CircuitPython.</i> Available at: https://docs.circuitpython.org/en/latest/README.html (Accessed: December 2022). </p>
            <p>Last Pass US LP. (n.d.) <i>The Best Free Password manager, LastPass.</i> Available at: https://www.lastpass.com/password-manager (Accessed: December 2022). </p>
            <p>Raspberry Pi Ltd (n.d.) <i>Raspberry Pi Pico C/C++ SDK, Raspberry Pi Documentation.</i> Available at: https://www.raspberrypi.com/documentation/microcontrollers/c_sdk.html (Accessed: December 2022). </p>
            <p><i>What is AES (rijndael) encryption?</i> (no date) Website Rating. Available at: https://www.websiterating.com/cloud-storage/glossary/what-is-aes-encryption/ (Accessed: January 7, 2023).</p> 
            <p>University of Washington (2022) <i>LastPass Data Breach.</i> Available at: https://ciso.uw.edu/2022/12/23/lastpass-data-breach/ (Accessed: January 7, 2023). </p>
            <p>Sobers, R. (2022) <i>The world in data breaches, Varonis. Varonis.</i> Available at: https://www.varonis.com/blog/the-world-in-data-breaches (Accessed: January 7, 2023). </p>
            <p>Crawford, W.by D. et al. (2019) <i>AES encryption: Everything you need to know about AES, ProPrivacy.com.</i> Available at: https://proprivacy.com/guides/aes-encryption (Accessed: January 7, 2023). </p>
            <p><i>What is token-based authentication?</i> (no date) <i>Okta Australia.</i> Available at: https://www.okta.com/au/identity-101/what-is-token-based-authentication/ (Accessed: January 8, 2023). </p>
            <p><i>Trezor Hardware Wallet (official): Bitcoin & Crypto Security </i>(no date)<i> Trezor Hardware Wallet (Official) | Bitcoin & Crypto Security.</i> Available at: https://trezor.io/ (Accessed: January 8, 2023). </p>
            <p><i>OnlyKey features </i>(no date) <i>Docs.</i> Available at: https://docs.onlykey.io/features.html (Accessed: January 9, 2023). </p>
            <p><i>Eagle: PCB design and electrical schematic software (2022) Autodesk.</i> Available at: https://www.autodesk.com/products/eagle/overview?term=1-YEAR&tab=subscription (Accessed: January 9, 2023). </p>
            <p><i>LTspice </i>(no date) <i>LTspice Simulator | Analog Devices.</i> Available at: https://www.analog.com/en/design-center/design-tools-and-calculators/ltspice-simulator.html (Accessed: January 9, 2023). </p>
            <p><i>Trello brings all your tasks, teammates, and tools together</i> (no date) <i>Trello.</i> Available at: https://trello.com/ (Accessed: January 9, 2023). </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectIdea