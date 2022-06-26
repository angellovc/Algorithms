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

    public root(number:number):number {
        if (number === this.nodes[number])
            return this.nodes[number];
        return this.root(this.nodes[number]);
    }

    public union(p:number, q:number):void {
        const qRoot = this.root(q);
        this.nodes[p] = qRoot;
    }

    public connected(p:number, q:number):boolean {
        const pRoot = this.root(p);
        const qRoot = this.root(q);
        if (qRoot === pRoot)
            return true;
        return false;
    }
}


export default FindUnion;