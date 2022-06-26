/*
    FindUnionQuick Balanced Root Improvements
*/


class FindUnion {
    private _nodes:number[] = [];
    private _nodesSize:number[] = [];

    constructor(nodesAmount:number) {
        for(let i = 0; i < nodesAmount; i++) {
            this._nodes.push(i);
            this._nodesSize.push(1);
        }
    }

    public get nodes() {
        return this._nodes;
    }

    public root(number:number) {
        if (number === this.nodes[number])
            return this.nodes[number];
        return this.root(this.nodes[number]);
    }

    public union(p:number, q:number) {
        const pRoot = this.root(p);
        const qRoot = this.root(q);

        if (this._nodesSize[qRoot] <= this._nodesSize[pRoot]) {
            this._nodes[qRoot] = pRoot;
            this._nodesSize[pRoot] += 1;
        } else {
            this._nodes[pRoot] = qRoot;
            this._nodesSize[qRoot] += 1;
        }
    }

    public connected(p:number, q:number) {
        return this.root(p) === this.root(q);
    }

}

export default FindUnion;