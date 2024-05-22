import {View, Text} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProducts} from './ProductSlice';
import {useAddNewPostMutation, useDeletePostMutation, useGetProductDataByIdQuery, useGetProductDataQuery} from './services/GetApiCall';

const DemoApp = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state);
  // console.log(JSON.stringify(products))
  

//   const {data, isError, isFetching, isSuccess} = useGetProductDataQuery();
//   console.log(`data:-> ${data}`); 
//   console.log(`isError:-> ${isError}`); 
//   console.log(`isFetching:-> ${isFetching}`); 
//   console.log(`isSuccess:-> ${isSuccess}`); 


// const {data, isError, isFetching, isSuccess} = useGetProductDataByIdQuery(1);
// console.log(`data:-> ${JSON.stringify(data)}`); 


// const [addPost] = useAddNewPostMutation();
// const addNewPost = async () =>{
//     const res = await addPost({
//         title: 'test product',
//         price: 13.5,
//         description: 'A new branded test product.',
//         image:'https://i.pravatar.cc',
//         category: 'electronics'
//     });

//     console.log(res);
// }

const [deleteData] = useDeletePostMutation();
const deletePost = async () =>{
    const res = await deleteData('6')

    console.log(res);
}


  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{padding: 20, borderWidth: 0.5}}
        onPress={() => {
            deletePost()
        deleteData()
        }}>
        Delete Data
      </Text>
    </View>
  );
};

export default DemoApp;
