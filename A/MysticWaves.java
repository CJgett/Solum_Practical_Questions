public class MysticWaves {
    /*  
    *    params: energyPerWave (x in the original problem statement): energy level of each individual wave
    *            numWaves (n in the original problem statement): total number of waves
    *    return: the total summed energy of all waves
    */
    public static int calculateTotalEnergy(int energyPerWave, int numWaves) {
        if (numWaves % 2 == 0) {
            // if the number of waves is even, the waves cancel each other out
            return 0;
        } else {
            // if the number of waves is odd, all waves cancel each other out until the last one 
            return energyPerWave;
        }
    }

    public static void main(String[] args) {
        System.out.println(calculateTotalEnergy(1, 4));
        System.out.println(calculateTotalEnergy(2, 5));  
        System.out.println(calculateTotalEnergy(3, 6));  
        System.out.println(calculateTotalEnergy(4, 7));  
    }
}



