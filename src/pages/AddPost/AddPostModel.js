class AddPostModel {
    state = {
      id: Number(new Date().getTime()),
      user: '',
      title: '',
      text: '',
    };
  }
  
  export default AddPostModel;
  