/*
    Quick union implementation
*/

class FindUnion {
    private _nodes:number[];
    constructor(nodesNumber:number) {
        this.nodes = [];
        for (let i = 0; i < nodesNumber; i++)
            this.nodes.push(i);
    }

    get nodes() {
        return this._nodes;
    }

    private set nodes(nodes:number[]) {
        this._nodes = nodes;
    }

    root(number:number) {
        if (number === this.nodes[number])
            return this.nodes[number];
        return this.root(this.nodes[number]);
    }

    union(p:number, q:number) {
        const qRoot = this.root(q);
        this.nodes[p] = qRoot;
    }

    connected(p:number, q:number) {
        const pRoot = this.root(p);
        const qRoot = this.root(q);
        if (qRoot === pRoot)
            return true;
        return false;
    }
}



const fu = new FindUnion(10);
console.log(fu.nodes);
console.log(fu.root(2));
fu.union(1,0);
console.log(fu.nodes);
console.log(fu.connected(0,1));
console.log(fu.connected(1,0));
console.log(fu.connected(1,1));
console.log(fu.connected(0,0));
console.log(fu.connected(0,2));


export default FindUnion;