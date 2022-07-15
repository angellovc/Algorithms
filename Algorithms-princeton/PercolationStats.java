/* *****************************************************************************
 *  Name:              Ada Lovelace
 *  Coursera User ID:  123456
 *  Last modified:     October 16, 1842
 **************************************************************************** */

import edu.princeton.cs.algs4.StdOut;
import edu.princeton.cs.algs4.StdRandom;
import edu.princeton.cs.algs4.StdStats;

public class PercolationStats {

    private final int trials;
    private final int n;
    private double[] results;

    private final double CONFIDENCE_95 = 1.96;

    public PercolationStats(int n, int trials) {
        if (n <= 0 || trials <= 0)
            throw new IllegalArgumentException("n and trials parameters should be grater than 0");
        this.n = n;
        this.trials = trials;
        this.results = new double[trials];
    }

    // sample mean of percolation threshold
    public double mean() {
        return StdStats.mean(this.results);
    }

    // sample standard deviation of percolation threshold
    public double stddev() {
        return StdStats.stddev(this.results);
    }


    // low endpoint of 95% confidence interval
    public double confidenceLo() {
        return this.mean() - (this.CONFIDENCE_95 * this.stddev()) / Math.sqrt(this.trials);
    }

    // high endpoint of 95% confidence interval
    public double confidenceHi() {
        return this.mean() + (this.CONFIDENCE_95 * this.stddev()) / Math.sqrt(this.trials);
    }

    private double trial(Percolation percolation) {
        while (!percolation.percolates()) {
            int row = StdRandom.uniform(1, this.n + 1), col = StdRandom.uniform(1, this.n + 1);
            if (!percolation.isOpen(row, col)) {
                percolation.open(row, col);
            }
        }
        return percolation.numberOfOpenSites();
    }

    private void simulate() {
        int i = 0;
        while (i < this.trials) {
            this.results[i] = trial(new Percolation(this.n)) / (double) (this.n * this.n);
            i++;
        }
    }

    // test client (see below)
    public static void main(String[] args) {
        PercolationStats ps = new PercolationStats(Integer.parseInt(args[0]),
                                                   Integer.parseInt(args[1]));
        ps.simulate();
        StdOut.println("mean                    = " + ps.mean());
        StdOut.println("stddev                  = " + ps.stddev());
        StdOut.println(String.format(
                "95%% confidence interval = [%f, %f]",
                ps.confidenceLo(),
                ps.confidenceHi())
        );
    }

}