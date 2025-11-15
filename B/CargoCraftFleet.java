public class CargoCraftFleet {

    /*  
    *    params: propulsionUnits: total number of propulsion units required by fleet 
    *    return: void, but prints the minimum and maximum number of cargo crafts used to propel the fleet 
    */
    public static void altCalcMinMax(long propulsionUnits) {
        // No valid combination exists if propulsion units are odd or less than 4 
        if (propulsionUnits % 2 != 0 || propulsionUnits < 4) {
            System.out.println("-1");
            return;
        }
        
        // Min crafts means the fleet consists of as many 6-unit crafts as possible
        long minCrafts = (long) ((propulsionUnits + 5) / 6);
        // Max crafts means the fleet consists of as many 4-unit crafts as possible
        long maxCrafts = (long) propulsionUnits / 4;

        System.out.println(minCrafts+ " " + maxCrafts);
    }

    public static void main(String[] args) {
        altCalcMinMax(4L);
        altCalcMinMax(7L);
        altCalcMinMax(24L);
        altCalcMinMax(998244353998244352L);
    } 
}
