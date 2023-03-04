import React, {Component } from 'react';
import Button from 'react-bootstrap/Button';

function bubbleSort(MySortArray) {
    let iterations = 0;
    for(let i = 0; i < MySortArray.length; i++){

        //Inner pass
        for(let j = 0; j < MySortArray.length - i - 1; j++){

            //Value comparison using ascending order

            if(MySortArray[j + 1] < MySortArray[j]){

                //Swapping
                [MySortArray[j + 1],MySortArray[j]] = [MySortArray[j],MySortArray[j + 1]]
            }
        }
        iterations ++;
    }
    console.log("Bubble sort:" + MySortArray);
    console.log("Bubble count:" + iterations);
}

function insertionSort(MySortArray) {
    //Start from the second element.
    let iterations = 0;
    for(let i = 1; i < MySortArray.length;i++){

        //Go through the elements behind it.
        for(let j = i - 1; j > -1; j--){
            
            //value comparison using ascending order.
            if(MySortArray[j + 1] < MySortArray[j]){

                //swap
                [MySortArray[j+1],MySortArray[j]] = [MySortArray[j],MySortArray[j + 1]];

            }
        }
        iterations ++;
    };
    console.log("Insertion sort:" + MySortArray);
    console.log("Insertion count:" + iterations);
}

function selectionSort(MySortArray) {
    let min;
    let iterations = 0;

    //start passes.
    for (let i = 0; i < MySortArray.length; i++) {
        //index of the smallest element to be the ith element.
        min = i;

        //Check through the rest of the MySortArrayay for a lesser element
        for (let j = i + 1; j < MySortArray.length; j++) {
        if (MySortArray[j] < MySortArray[min]) {
            min = j;
        }
        }

        //compare the indexes
        if (min !== i) {
        //swap
        [MySortArray[i], MySortArray[min]] = [MySortArray[min], MySortArray[i]];
        }
        iterations ++;
    }
    console.log("Selection sort:" + MySortArray);
    console.log("Selection count:" + iterations);
}

class sortingAlg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Barray: [4,8,3,5,1,9,0,3,2],
            Bsorted: [],
            Isorted: [],
            Ssorted: []
        };
      }
    
    render () {
        const {Barray, Bsorted,Isorted,Ssorted} = this.state;
        return (
            <div>
                <div>
                    <Button onClick={(bubbleSort(this.state.Barray))}>Bubble Sort</Button>
                </div>
                <div>
                    <Button onClick={(insertionSort(this.state.Barray))}>Insertion Sort</Button>
                </div>
                <div>
                    <Button onClick={(selectionSort(this.state.Barray))}>Selection  Sort</Button>
                </div>
            </div>

        )
    }
}

export default sortingAlg
