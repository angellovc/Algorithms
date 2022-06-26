/*
    FindUnionQuick Path Compression
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
        
        const parent = this.nodes[number];
        const grandParent = this.nodes[parent];
        /*
            By getting the grandParent and assign it to the 
            current node, we are putting the current node 
            one level above. We call this path compression,
            because this way the tree leves are flattened every
            time they're iterated over. 
        */
        this.nodes[number] = grandParent;
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