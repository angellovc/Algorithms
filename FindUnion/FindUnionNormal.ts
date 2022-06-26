/*
    FindUnion simple implementation

*/

class FindUnion {
    private _nodes:number[] = [];
    constructor(nodesNumber:number) {
        for (let i = 0; i < nodesNumber; i++)
            this.nodes.push(i);
    }

    public get nodes():number[] {return this._nodes}; 


    public union(p:number, q:number):void {
        const pValue = this.nodes[p], qValue = this.nodes[q];
        if (pValue === qValue)
            return;
        for(let i = 0; i < this.nodes.length; i++) {
            if (this.nodes[i] === pValue)
                this.nodes[i] = qValue;
        }
    }

    public connected(p:number, q:number):boolean {
        return this.nodes[p] === this.nodes[q];
            
    }

}

export default FindUnion;
