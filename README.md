# React Native App to demonstrate react redux state management using rtq query for data fetching

`DemoApp` is a React Native component that showcases the use of Redux for state management and RTK Query for data fetching and mutations. This example demonstrates fetching product data, adding a new product, and deleting a product through API calls.

## Table of Contents

*   [Installation](https://chatgpt.com/c/ef603981-5ec9-4570-8ba0-1a232541a4e9#installation)
*   [Usage](https://chatgpt.com/c/ef603981-5ec9-4570-8ba0-1a232541a4e9#usage)
*   [Code Explanation](https://chatgpt.com/c/ef603981-5ec9-4570-8ba0-1a232541a4e9#code-explanation)
*   [Dependencies](https://chatgpt.com/c/ef603981-5ec9-4570-8ba0-1a232541a4e9#dependencies)

## Installation

1. **Clone the Repository**

```crmsh
git clone <repository-url>
cd <repository-directory>
```

1. **Install Dependencies**

```mipsasm
npm install
# or
yarn install
```

1. **Setup Redux Store**
2. Ensure your Redux store is configured to include the `fetchProducts` reducer and RTK Query services from `./services/GetApiCall`.
3. **Run the App**

```dockerfile
npx react-native run-android
# or
npx react-native run-ios
```

## Usage

Here is a basic example of how to integrate and use the `DemoApp` component in your project:

```coffeescript
import React from 'react';
import DemoApp from './DemoApp'; // Adjust the path as necessaryconst App = () => {
  return <DemoApp />;
};

export default App;
```

## Code Explanation

### Imports

```pgsql
import { View, Text } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './ProductSlice';
import { useAddNewPostMutation, useDeletePostMutation, useGetProductDataByIdQuery, useGetProductDataQuery } from './services/GetApiCall';
```

### Functional Component

```javascript
const DemoApp = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state);
  console.log(JSON.stringify(products));

  const { data, isError, isFetching, isSuccess } = useGetProductDataQuery();
  console.log(`data:-> ${data}`); 
  console.log(`isError:-> ${isError}`); 
  console.log(`isFetching:-> ${isFetching}`); 
  console.log(`isSuccess:-> ${isSuccess}`);

  const { data: productData, isError: productError, isFetching: productFetching, isSuccess: productSuccess } = useGetProductDataByIdQuery(1);
  console.log(`data:-> ${JSON.stringify(productData)}`);

  const [addPost] = useAddNewPostMutation();
  const addNewPost = async () => {
    const res = await addPost({
      title: 'test product',
      price: 13.5,
      description: 'A new branded test product.',
      image: 'https://i.pravatar.cc',
      category: 'electronics'
    });

    console.log(res);
  };

  const [deleteData] = useDeletePostMutation();
  const deletePost = async () => {
    const res = await deleteData('6');
    console.log(res);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Textstyle={{ padding: 20, borderWidth: 0.5 }}
        onPress={() => {
          deletePost();
        }}>
        Delete Data
      </Text></View>
  );
};

export default DemoApp;
```

### Explanation

1. **State Management**:
    *   `dispatch` is used to dispatch actions to the Redux store.
    *   `products` selects the state from the Redux store.
2. **Data Fetching**:
    *   `useGetProductDataQuery` fetches all product data.
    *   `useGetProductDataByIdQuery` fetches product data by ID.
3. **Mutations**:
    *   `useAddNewPostMutation` adds a new product.
    *   `useDeletePostMutation` deletes a product by ID.
4. **UI**:
    *   The component renders a `View` with a `Text` element. When the `Text` element is pressed, it triggers the `deletePost` function to delete a product.

## Dependencies

*   `react-native`
*   `react`
*   `react-redux`
*   `@reduxjs/toolkit`
*   `@reduxjs/toolkit/query/react`

## Conclusion

`DemoApp` is a basic example demonstrating the integration of Redux and RTK Query in a React Native application. It can be customized further based on the requirements of your project.
