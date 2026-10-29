class MinStack {
    arr: number[] = [];
    minIndexes: number[] = [];

    constructor() {}

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        {
            this.arr.push(val);

            const lastMinIdx = this._getLastMinIdx();
            const lastArrIdx = this._getLastArrIdx();

            if (lastMinIdx > -1) {
                const currentMin = this.arr[this.minIndexes[lastMinIdx]];
                if (val < currentMin) this.minIndexes.push(lastArrIdx);
            } else {
                this.minIndexes.push(lastArrIdx);
            }
        }
    }

    /**
     * @return {void}
     */
    pop(): void {
        const curItemIdx = this._getLastArrIdx();
        const lastMinIdx = this.minIndexes[this._getLastMinIdx()];

        this.arr.pop();

        if (curItemIdx === lastMinIdx) {
            this.minIndexes.pop();
        }

        return;
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.arr[this.arr.length - 1];
    }

    /**
     * @return {number}
     */
    getMin(): number {
        const lastMinIdx = this._getLastMinIdx();
        return this.arr[this.minIndexes[lastMinIdx]];
    }

    _getLastMinIdx(): number {
        return this.minIndexes.length - 1;
    }
    _getLastArrIdx(): number {
        return this.arr.length - 1;
    }
}
