import faker from 'faker';

const getPostReapet = (number) => {
  let posts = [];
  for (let idx = 0; idx < number; idx++) posts.push(getPost());
  // console.log(posts);
  return posts;
}
const getPost = () => {
  const obj =  { name: '제목', text: '대충' }
  // console.log(obj);
  return obj;
};

export const getFakeRoomData = () => {
  const hello = { title: '1번방', user:32, description:'JavaScript 코드를 물어봐주세요.' };
  
  const posts = getPostReapet(30);

  return {
    title: faker.name.title(),
    posts: posts
  };
}