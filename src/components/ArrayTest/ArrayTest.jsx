import { useEffect } from 'react';
import styles from './test.module.scss';

const Container = ({ children, method = () => {}, data, testNum}) => {
    useEffect(() => {
        console.log(`${testNum}`, method(data))
    }, []);

    return (
        <div className={styles.container}>{ children }</div>
    )
}

const data = [23, 662, 373, 192, 10, 1];
const data1 = [[123, 232, 99], 256, 1616, [123, 123]];
const data2 = [{'city': 'chicago'}, {'state': 'illinois'}, {'country': 'usa'}];
const data3 = ['Mercedez', 'Toyota', 'Ford'];

export const ArrayTest = () => {
    return (<>
        <h6>Get the value at 2 index</h6>
        <Container testNum={1} data={data} method={info => {
            const answer = info.at(2);
            return answer;
        }}></Container>

        <h6>Merge two arrays</h6>
        <Container testNum={2} data={[data, data1]} method={info => {
            let answer = [];
            for (let x in info) {
                answer = answer.concat(info[x]);
            }
            return answer;
        }}></Container>

        <h6>Copy items within array</h6>
        <Container testNum={3} data={data} method={info => {
            let answer = [...info];
            answer.copyWithin(2, 0, 2);

            return answer;
        }}></Container>

        <h6>Get the entries of an array</h6>
        <Container testNum={4} data={data} method={info => {
            return info.entries(info);
        }}></Container>

        <h6>Execute function on every item of array</h6>
        <Container testNum={5} data={data} method={info => {
            const answer = [...info];
            answer.forEach((i, k) => {
                answer[k] = i * i;
            });

            return answer;
        }}></Container>

        <h6>Fill the indexes of array</h6>
        <Container testNum={6} data={data} method={info => {
            let answer = [...info]
            answer.fill(888, 4, 5);
            return answer;
        }}></Container>

        <h6>Filter an array by target value</h6>
        <Container testNum={7} data={data} method={info => {
            const answer = info.filter(i => i < 100);
                
            return answer;
        }}></Container>

        <h6>Find value in array that meets condition</h6>
        <Container testNum={8} data={data} method={info => {
            return info.find(i => i < 100);
        }}></Container>

        <h6>Find index of value in array that meets condition</h6>
        <Container testNum={9} data={data} method={info => {
            return info.findIndex(i => i == 23);
        }}></Container>

        <h6>Find the last item in array that meets condition</h6>
        <Container testNum={10} data={data} method={info => {
            return info.findLast(i => i < 100)
        }}></Container>

        <h6>Find the index of the last item in array that meets condition</h6>
        <Container testNum={11} data={data} method={info => {
            return info.findLastIndex(i => i < 100)
        }}></Container>

        <h6>Flatten array of arrays</h6>
        <Container testNum={12} data={data1} method={info => {
            return info.flat()
        }}></Container>

        <h6>Multiply each item of array by 1 and 2 and return flattened array</h6>
        <Container testNum={13} data={data} method={info => {
            return info.flatMap(i => [i, i * 2])
        }}></Container>

        <h6>Loop through each item of array, multiplying each item by 10</h6>
        <Container testNum={14} data={data} method={info => {
            let answer = [...info];
            answer.forEach((i, k, arr) => {
                arr[k] = i * 10
            });
            return answer; 
        }}></Container>

        <h6>Check if array includes a value</h6>
        <Container testNum={15} data={data} method={info => {
            return info.includes(1);
        }}></Container>

        <h6>Get the indexOf item</h6>
        <Container testNum={16} data={data} method={info => {
            return info.indexOf(10);
        }}></Container>

        <h6>Check if item is array</h6>
        <Container testNum={17} data={data} method={info => {
            return Array.isArray(info);
        }}></Container>

        <h6>Join items of array into a string</h6>
        <Container testNum={18} data={data} method={info => {
            return info.join();
        }}></Container>

        <h6>Get keys of array</h6>
        <Container testNum={19} data={data} method={info => {
            return Object.keys(info);
        }}></Container>

        <h6>Get keys of object</h6>
        <Container testNum={20} data={data2} method={info => {
            let answer = info.map(i => Object.keys(i));
            answer = answer.flat();
            return answer;
        }}></Container>

        <h6>Get last indexof value in array</h6>
        <Container testNum={21} data={data} method={info => {
            return info.lastIndexOf(1);
        }}></Container>

        <h6>Get length of array</h6>
        <Container testNum={22} data={data} method={info => {
            return info.length;
        }}></Container>

        <h6>Map through array</h6>
        <Container testNum={23} data={data} method={info => {
            return info.map(i => i * 100)
        }}></Container>

        <h6>Remove the last element of array and save the element removed</h6>
        <Container testNum={24} data={data} method={info => {
            let answer = [...info];
            let popped = answer.pop();

            return [answer, popped]
        }}></Container>

        <h6>Add elements to end of array</h6>
        <Container testNum={25} data={data} method={info => {
            let answer = [...info];
            answer.push(101);
            return answer;
        }}></Container>

        <h6>Reduce array arrays into single array</h6>
        <Container testNum={26} data={data1} method={info => {
            let answer = [...info];
            answer = answer.reduce((result, i) => {
                if (Array.isArray(i)) {
                    result = result.concat(i)
                } else {
                    result.push(i)
                }

                return result;
            }, []);
            return answer;
        }}></Container>

        <h6>Reduce array of names into an object that contains... nameOfCar: countOfOccurrance</h6>
        <Container testNum={27} data={data3} method={info => {
            let answer = [...info].reduce((result, i, k) => {
                if (typeof result[i] !== 'undefined') {
                    result[i]++;
                } else {
                    result[i] = 1
                }

                return result;
            }, {});
            return answer;
        }}></Container>

        <h6>Reverse the order of elements in an array</h6>
        <Container testNum={28} data={data} method={info => {
            return [...info].reverse();
        }}></Container>

        <h6>Remove the first element of array. Hold the value of the removed element</h6>
        <Container testNum={29} data={data} method={info => {
            let answer = [...info];
            let shifted = answer.shift();

            return [answer, shifted];
        }}></Container>

        <h6>Slice new array of items from the indexes 1 and 2</h6>
        <Container testNum={30} data={data} method={info => {
            let answer = [...info];
            answer = answer.slice(1, 3);
            return answer;
        }}></Container>

        <h6>Check if some values meet a condition</h6>
        <Container testNum={31} data={data} method={info => {
            return [...info].some(i => i > 100);
        }}></Container>

        <h6>Sort an array descendingly</h6>
        <Container testNum={32} data={data} method={info => {
            return [...info].sort((a, b) => b-a);
        }}></Container>

        <h6>Splice in 2 elements into array at index 2</h6>
        <Container testNum={33} data={data} method={info => {
            let answer = [...info];
            answer.splice(2, 0, 444, 555);
            return answer;
        }}></Container>

        <h6>Splice out 2 elements from array at index 2</h6>
        <Container testNum={34} data={data} method={info => {
            let answer = [...info];
            return answer.splice(2, 2);
        }}></Container>

        <h6>Convert an array to string</h6>
        <Container testNum={35} data={data} method={info => {
            return [...info].join();
        }}></Container>

        <h6>Add item to the beginning of array</h6>
        <Container testNum={36} data={data} method={info => {
            let answer = [...info];
            answer.unshift(201);
            return answer;
        }}></Container>
    </>)
}