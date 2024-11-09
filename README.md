# Lendsqr Frontend Assessment

## https://david-emmanuel-lendsqr-fe-test.vercel.app/

This project is a frontend application built for the Lendsqr Frontend Engineering Assessment. It replicates essential UI features for a lending platform and includes a login page, dashboard, user page, and user details page.

## Tech Stack

Apart from React, TypeScript, and SCSS, this project leverages Next.js for its server-side rendering capabilities, allowing SEO-friendly pages and improved performance.

Mock API: [JSON generator](https://next.json-generator.com/) was used to simulate 500 mock user records.

## Features

- **Modular Components**: The app is built with reusable components to keep the codebase scalable and manageable.
- **Filtering and Pagination**: Users can filter data based on attributes and paginate through results.
- **Local Caching**: User details are stored in `localStorage`, enhancing loading speed and reducing API calls. By default, the cache is cleared every minute.
- **Responsive and Accessible**: Optimized for various screen sizes, with accessible components for improved user experience.

## Setup and Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/<username>/lendsqr-fe-test.git
   cd lendsqr-fe-test
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

   Access the app at [http://localhost:3000](http://localhost:3000).

4. **Testing**: Run the test suite with:

   ```bash
   npm run test
   ```

   or

   ```bash
   npm run test:watch
   ```
