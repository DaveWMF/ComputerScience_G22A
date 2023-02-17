
class Node {
    constructor(data, left, right){
        this.data = data
        this.left = left
        this.right = right
    }
}

class BinaryTree {
    constructor(){
        this.root = null
    }

    add(data){ //
        // If root is null, then the tree is empty
        if(this.root === null){
            this.root = new Node(data, null, null)
            return
        }

        let currentNode = this.root

        while(true){

            if(data <= currentNode.data){
                // If left node is empty
                if(currentNode.left != null){
                    currentNode = currentNode.left;
                }else{
                    currentNode.left = new Node(data, null, null)
                    return // break also works
                }
            }else{
                if(currentNode.right !== null){
                    currentNode = currentNode.right;
                }else{
                    currentNode.right = new Node (data, null, null)
                    return
                }
            }
        }
    }

    contains(data){
        let currentNode = this.root
        while(currentNode !== null){
            if( data === currentNode.data){
                return true
            }else{
                if(data <= currentNode.data){
                    currentNode = currentNode.left
                }else{
                    currentNode = currentNode.right
                }
            }
        }
        return false
    }
}

const arbol = new BinaryTree();
arbol.add(50)

for(let i = 0; i<10; i++){
    arbol.add(Math.round(Math.random()*100))
}

console.log(arbol)

console.log(arbol.contains(50))
console.log(arbol.contains(1))