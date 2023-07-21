<h1 align="center"> <b>Grocery List</b></h1>

<h2 align="center">Hello! I'm Anastasiia Kucher 
<img src="https://github.com/blackcater/blackcater/raw/main/images/Hi.gif" height="32"/></h2>

<h3 align="center">FullStack Developer and Project Manager from Ukraine!</h3>
<br> 
<h3 align="center">This project was built with the usage of React JS and the porpose of this to help people to keep in mind every product that is nececcary to buy.</h3>  
<div align="center">

![reactjslounge ](https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white) 
![reactjslounge](https://img.shields.io/badge/HTML-5-orange)
![reactjslounge](https://img.shields.io/badge/CSS-3-blue)
![reactjslounge](https://img.shields.io/badge/Git-orange)
</div>

<p> <b> Easy steps to run the project:</b> </p> 

1. Wride down into the terminal this combination:

 git clone https://github.com/AnastassiiaKucher/new-grocery-list.git

2. Open new terminal
3. code .
4. nmp start

<p> <b> Usage & Code listing: </b></p>

1. The whole concept of the application
![haupt](/readmephoto/one.PNG )

2. The input where the user can text the list of the products
![haupt](/readmephoto/input.PNG )

```
Here you can see the function to display the state when the user input the products to the list and exclusion of the ability to add a column without any data:

onChangeEvent(e){
    this.setState({userInput: e});
}
addItem(input){
    if (input === ''){
        alert("Please, enter an Item")
    } else{

    let listArray = this.state.groceryList;
    listArray.push(input);
    this.setState({groceryList: listArray, userInput: '' })
    }
        }
```

3. The "Add" button with pressing which the user can add the items to the list.
    ![haupt](/readmephoto/add.PNG)

4. The "Delete" button with pressing which the user can delete the items out of the list.
![haupt](/readmephoto/delete.PNG) 

```
Usage of the access to what inside the list:

 deleteItem(){
            let listArray = this.state.groceryList;
            listArray = [];
            this.setState({groceryList: listArray});
        }
```
```
Get an ancess to what the user has written till this moment:

<ul>
                {this.state.groceryList.map((item, index) => (
                    <li onClick={this.crossWord} key={index} alt='check-box'  >
                        <img src={check} width="40px"  alt='check-box' /> 
                        {item}
                    </li>
                ))}
            </ul>
```