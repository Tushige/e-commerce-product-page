import useSWR from 'swr';
import { v4 as uuidv4 } from 'uuid';
import { module1Extension, module2Extension } from '@data/mock-data';

// for simulating slow connection
// const fetcher = async (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(fetch(url).then((res) => res.json()));
//     }, 10000);
//   });
// };

const fetcher = async (url) => fetch(url).then((res) => res.json());

export function use3VueData() {
  const { data, error, isLoading } = useSWR(
    `https://code-interview-challenge-default-rtdb.firebaseio.com/modules.json`,
    fetcher
  );

  const module1 = data?.[0]?.module1 ?? {};
  let module2 = data?.[1]?.module2 ?? {};
  /* 
  we need to add the following additional fields to each item in subContent
    1. id
    2. productImageSrc
    3. features
  */
  module1.subContent = module1?.subContent?.map((item, idx) => {
    return {
      ...item,
      ...module1Extension[idx],
    };
  });
  module2 = [
    {
      id: uuidv4(),
      ...module2,
    },
    ...module2Extension,
  ];
  return {
    module1,
    module2,
    isLoading,
    isError: error,
  };
}
