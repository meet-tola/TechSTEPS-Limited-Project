# TechSTEPS Limited Project

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Data Models](#data-models)
- [License](#license)

## Introduction

Welcome to the TechSTEPS Limited project! This project includes a system for creating customer data and managing new fund deposits. It employs React for the frontend and interacts with a database system.

## Features

- **Customer Data Creation:**
  - Create and store customer data with relevant details.
  - Clean and user-friendly form for data entry.

- **New Fund Deposit Management:**
  - Record new fund deposits with detailed information.
  - Calculate and display maturity and interest-related details.

- **Email Verification:**
  - Implements email verification upon user signup.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js
- npm (Node Package Manager)
- Supabase

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd <project-folder>
```

2. Install dependencies:

```bash
npm install
```

3. Run the application:

```bash
npm start
```

## Project Structure

```bash
project-root/
│               # React frontend
├── src/
│  ├── components/
│  ├── data/
│  ├── database/
|  ├── pages/
│
└── ...
```

## Usage

- Open your browser and navigate to **http://localhost:3000** to access the code.

## API Endpoints

### Customer Data Model
- bvn
- firstName
- lastName
- ...

### New Fund Deposit Data Model
- fundMID
- clientID
- clientName
- ...

## License

This project is licensed under the MIT License.
