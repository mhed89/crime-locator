# Crime Locator in Sweden

A Next.js application that displays current crime reports in Sweden using the [Brottsplatskartan API](https://brottsplatskartan.se/).

## Features

- View recent crime reports nationally
- Search for crime reports by location
- Favorite crime reports (work in progress)
- Responsive design with Bootstrap

## Tech Stack

- **Next.js 15** - React framework
- **React 19** - UI library
- **SWR** - Data fetching and caching
- **Bootstrap 5** - CSS framework
- **Sass** - CSS preprocessor
- **FontAwesome** - Icons

## Getting Started

### Prerequisites

- Node.js 18. x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mhed89/crime-locator.git
cd crime-locator
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## Project Status

**Recently Updated (December 2025)**
- Modernized all dependencies to latest versions
- Migrated to Next.js 14 and React 18
- Fixed deprecated Next.js patterns
- Improved error handling and loading states
- Enhanced code quality and consistency

### Completed Features
- National crime report listing
- Location-based crime search
- Responsive design
- Crime report cards with images

### Work in Progress
- Map visualization
- Favorites functionality
- Improved filtering options

## API

This project uses the public [Brottsplatskartan API](https://brottsplatskartan.se/) to fetch crime data from Sweden. 

## Contributing

This is a personal hobby project, but suggestions and contributions are welcome! 

## License

This project is open source and available under the MIT License. 

---

Made with ❤️ and a bit of ADHD hyperfocus
