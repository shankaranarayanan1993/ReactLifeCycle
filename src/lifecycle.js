import React from 'react';


const ErrorComponent = () =>  (<div> Error : {this.errorUnhandled}</div>)
export default class Counter extends React.Component {
    constructor(props){
        console.log("1 Constructor");
        console.log("--------------------------");
        super(props); // This sets this.props to props

        this.state = {
            counter : 0,
            generateSeed: 0
        };
        this.increment = ()=> this.setState({counter: this.state.counter +1});
        this.decrement = ()=> this.setState({counter: this.state.counter -1});
    }

    static getDerivedStateFromProps(props,state){// This will map props to state
        console.log("3 Get Derived State to props");
        console.log("--------------------------");
       if(props.generateSeed && state.generateSeed !== props.generateSeed){
           return {
               generateSeed : props.generateSeed,
               counter: props.generateSeed
           }
       }
       return null;

    }
   /* componentWillMount(){ // Unsafe way , and is restricted by React
        console.log("Component Will Mount");
        console.log("--------------------------");
    }*/

    componentDidMount(){
        console.log("4 Component Did Mount");
        console.log("--------------------------");
    }

    shouldComponentUpdate(nextProps , nextState){ //  returns true by default
        if(nextProps.ignoreProps &&
           this.props.ignoreProps !== nextProps.ignoreProps){
            console.log('ignoreProps',this.props.ignoreProps);
            return false;
        }
        return true;
        console.log("5 Should Component Update");
        console.log("--------------------------");
    }

    render() {
        console.log("2 Render");
        console.log("--------------------------");
        return (
        <div>
            <div>
                <button onClick={this.increment}> Increment</button>
             <br/>
                <button onClick={this.decrement}> Decrement</button>
            </div>

            <div className="Counter">
                 Counter : {this.state.counter}
              {/*  <ErrorComponent/>*/}
            </div>

        </div>
        )
    }

    componentDidUpdate(prevProps, prevState, snapShot){
       /* console.log("Prev Props", prevProps);
        console.log("Prev State", prevState);
        console.log("Snap Shot", snapShot);*/
        console.log("7 Component Did Update");
        console.log("--------------------------");
    }

    componentWillUnmount(){
        console.log("7 Component Will Unmount");
        console.log("--------------------------");
    }
    componentDidCatch(){
        // This will catch the error in a particular component and will avaod whole application crash, but the component
        // that has error willthroe erroe
        console.log("7 Component Did catch Error");
        console.log("--------------------------");
    }
}