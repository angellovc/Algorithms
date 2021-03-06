/* *****************************************************************************
 *  Name:              Ada Lovelace
 *  Coursera User ID:  123456
 *  Last modified:     October 16, 1842
 **************************************************************************** */

import edu.princeton.cs.algs4.StdIn;
import edu.princeton.cs.algs4.StdOut;
import edu.princeton.cs.algs4.StdRandom;

public class RandomWord {
    public static void main(String[] args) {

        String champion = StdIn.readString();
        double championResult = 0.0;
        int i = 2;
        while (!StdIn.isEmpty()) {
            String contender = StdIn.readString();
            double contenderResult = StdRandom.bernoulli(1.0 / (double) i) ? 1 : 0;
            if (contenderResult > championResult) {
                champion = contender;
                championResult = contenderResult;
            }
            i++;
        }
        StdOut.println(champion);

    }
}
