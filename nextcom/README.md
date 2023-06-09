## StableStack E-COMMERCE

[StableStack] is a dynamic website built with Next.js and Sanity Studio. It uses Stripe payment system for transactions and all the content comes from Sanity Studio, which makes it easy for team members or other authorized persons to add and update content dynamically.

Installation [StableStack]

To install the project, simply run the following command:

npm install or yarn install

Additionally, you will need to install Sanity Studio by running:

npm install sanity-studio or yarn add sanity-studio

## Usage

[StableStack] is easy to use, as all the content is managed dynamically through Sanity Studio. Users can simply log in to Sanity Studio and add, update, or delete content as needed. Stripe payment system is integrated into the website for secure and hassle-free transactions.

## Technologies Used

[StableStack] is built with Next.js, a popular React framework that offers server-side rendering and automatic code splitting, making it fast and efficient. Additionally, Sanity Studio is used for managing content, which is a powerful and flexible CMS that offers real-time collaboration and easy customization.

## Why Next.js, Sanity Studio, and Stripe

Next.js, Sanity Studio, and Stripe are all powerful tools that make development faster, more efficient, and more secure. Next.js offers server-side rendering, which improves performance and SEO, and also provides automatic code splitting, which reduces load times. Meanwhile, Sanity Studio is a flexible and customizable CMS that makes it easy to manage content and collaborate in real-time. Stripe payment system offers easy-to-use APIs that allow developers to securely integrate payment functionality into their websites and applications.

Stripe: https://stripe.com/docs
Sanity: https://www.sanity.io/docs
Next.js: https://nextjs.org/docs

<<<<<<< Updated upstream

## Fixed Stripe.js Integration  
=======
## Fixed Stripe.js Integration
>>>>>>> Stashed changes

While working on this project, I encountered a challenge while integrating Stripe.js for payment processing. I was initially unable to receive responses from the backend on requests, which made it difficult to connect the payment system to the site.

After some investigation and research, I discovered that the issue was due to a few small details that I had overlooked in the Stripe.js code. Specifically, I had mistakenly included the cartItems object when mapping items, which was not needed in the Stripe.js implementation. Additionally, I had mislabeled the price ID in one instance of the code, which was causing further errors.

By carefully reviewing the code and making these small changes, I was able to successfully integrate Stripe.js into the project and enable payment processing for users.

This experience taught me the importance of paying close attention to details in code, and the value of thorough debugging and research to solve problems. It also helped me improve my problem-solving skills as a junior developer. was able to successfully integrate Stripe.js into the project and enable payment processing for users.

# Contact Information

Hey there! My name is Nika Germanishvili, and I'm the developer behind this awesome project. As a junior developer with a background in responsive design, I'm always looking to improve my skills and take on new challenges. I graduated from the Academy of Digital Industry and have been working hard on this project using some amazing tools like Next.js, Sanity Studio, and Stripe.

If you have any questions or feedback about the project, feel free to reach out to me at for personal email adress [nikagermanishvili@gmail.com], and here is my second Working email adress [germanxcardinal@gmail.com]. I'd love to hear from you and get your thoughts on the project.

# Thanks for checking out my work, and I hope you enjoy using [StableStack] !
