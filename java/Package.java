import java.util.LinkedList;

public class Package {
    static LinkedList<Package> packages = new LinkedList<Package>();
    private String id, size, speed;

    public static void add(String id, String size, String speed){
        boolean packageAdded = false;
        Package p = new Package();
        p.id = id;
        if (size=="large"||size=="small") {
            p.size = size;
        } else throw new IllegalArgumentException("size must be large or small");
        if (speed=="fast"||speed=="slow") {
            p.speed = speed;
        } else throw new IllegalArgumentException("speed must be fast or slow");

        for (int i = 0; i < packages.size(); i++){
            if ( !packageAdded && priority(p) <= priority(packages.get(i)) ){
                packageAdded = true;
                packages.add(i,p);
            }
        }
        if (!packageAdded) packages.add(p);
    }

    public static String remove(){
        if (packages.size()==0) return null;
        return packages.removeLast().id;
    }

    public static int priority(Package p){
        int i = 0;
        if (p.size=="large") i += 1;
        if (p.speed=="fast") i+= 2;
        return i;
    }

    public static void print(){
        for (int i = 0; i < packages.size(); i++){
            System.out.print(packages.get(i).id + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {

        System.out.println("Expect z b e d q f x k m");

        add("z","large","fast");
        add("b","large","fast");
        add("k","small","slow");
        add("d","small","fast");
        System.out.println(remove());
        add("e","large","fast");
        add("f","large","slow");
        add("q","small","fast");
        add("x","large","slow");
        add("m","small","slow");

        System.out.println(remove());
        System.out.println(remove());
        System.out.println(remove());
        System.out.println(remove());
        System.out.println(remove());
        System.out.println(remove());
        print();
    }
}
