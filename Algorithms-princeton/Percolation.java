/* *****************************************************************************
 *  Name:              Ada Lovelace
 *  Coursera User ID:  123456
 *  Last modified:     October 16, 1842
 **************************************************************************** */

import edu.princeton.cs.algs4.StdOut;
import edu.princeton.cs.algs4.WeightedQuickUnionUF;

public class Percolation {
    private boolean[][] matrix;
    private final WeightedQuickUnionUF ufPercolation;
    private final WeightedQuickUnionUF ufFull;
    private final int limit;
    private int openSites = 0;
    private final int top;
    private final int bottom;

    public Percolation(int n) {
        if (n <= 0)
            throw new IllegalArgumentException("Percolation value should be greater than zero");

        limit = n;
        matrix = new boolean[n][n];
        this.ufPercolation = new WeightedQuickUnionUF((n * n) + 2);
        this.ufFull = new WeightedQuickUnionUF((n * n) + 1);
        this.bottom = n * n;
        this.top = n * n + 1;

        for (int i = 0; i < limit; i++) {
            ufPercolation.union(this.bottom, i);
        }

        for (int i = n * n - 1; i >= n * n - limit; i--) {
            ufPercolation.union(this.top, i);
        }

        for (int i = 0; i < limit; i++) {
            ufFull.union(this.bottom, i);
        }
    }

    public int numberOfOpenSites() {
        return this.openSites;
    }

    public void open(int row, int col) {
        if (this.isOpen(row, col))
            return;
        row--;
        col--;
        this.matrix[row][col] = true;

        this.link(row, col, row + 1, col);
        this.link(row, col, row - 1, col);
        this.link(row, col, row, col - 1);
        this.link(row, col, row, col + 1);
        openSites++;
    }

    private void link(int oldRow, int oldCol, int row, int col) {
        checkRanges(oldRow, oldCol);
        if (row >= limit || row < 0 || col >= limit || col < 0 || !isOpen(row + 1, col + 1))
            return;
        this.ufPercolation.union(getIndex(oldRow, oldCol), getIndex(row, col));
        this.ufFull.union(getIndex(oldRow, oldCol), getIndex(row, col));

    }

    public boolean isOpen(int row, int col) {
        --row;
        --col;
        checkRanges(row, col);
        return this.matrix[row][col];
    }

    public boolean isFull(int row, int col) {
        row--;
        col--;
        checkRanges(row, col);
        if (matrix[row][col] == true)
            return this.ufFull.find(getIndex(row, col)) == this.ufFull.find(this.bottom);
        return false;
    }

    public boolean percolates() {
        return this.ufPercolation.find(this.bottom) == this.ufPercolation.find(this.top);
    }

    private void checkRanges(int row, int col) {
        if (row < 0 || row >= limit)
            throw new IllegalArgumentException(
                    String.format("Row should be greater than 0 and lesser or equal to %d",
                                  limit)
            );
        if (col < 0 || col >= limit)
            throw new IllegalArgumentException(
                    String.format("Row should be greater than 0 and lesser or equal to %d",
                                  limit)
            );
    }

    private int getIndex(int row, int col) {
        return (row * this.limit) + col;
    }

    // test client (optional)
    public static void main(String[] args) {
        Percolation percolation = new Percolation(3);
        percolation.open(3, 3);
        percolation.open(2, 3);
        percolation.open(1, 3);
        StdOut.println(percolation.isFull(3, 3));
        StdOut.println(percolation.percolates());
        StdOut.println("finished");
    }
}
