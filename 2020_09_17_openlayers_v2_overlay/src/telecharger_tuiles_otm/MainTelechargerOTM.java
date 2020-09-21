package telecharger_tuiles_otm;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;

public class MainTelechargerOTM {

	static String baseSite = "tile.opentopomap.org";
	static String rep = "/home/autret/aa/otm_xyz_";

	static int minZoom = 5;
	static int maxZoom = 17;

	static String [] brest = {"13", "3976", "2823", "4000", "2857"};
	
	public static void main(String [] args) {
		telecharger(brest);
	}
	
	public static void telecharger(String [] lieu) {
		int zoom = Integer.parseInt(lieu[0]);
		int xmin = Integer.parseInt(lieu[1]);
		int ymin = Integer.parseInt(lieu[2]);
		int xmax = Integer.parseInt(lieu[3]);
		int ymax = Integer.parseInt(lieu[4]);
		for (int i=xmin ; i<xmax ; i++) {
			for (int j=ymin ; j<ymax ; j++) {
				telecharger(zoom,i,j);
			}
		}
	}
	
	public static void telecharger(int zoom, int x, int y) {
		int ok = 0;
		for (char site = 'a' ; site <= 'c' ; site++) {
			try {
				String fic = rep + zoom + "/otm_" + zoom + "_" + x + "_" + y +".png";
				System.out.println("fic = "+fic);
				if (new File(fic).exists()) {
					ok = 1;
					System.out.println("existe");
				}
				else {
					URL url = new URL("https://" + site+"." + baseSite + "/" + zoom+"/"+x+"/"+y+".png");
					System.out.println("url = "+url);
					URLConnection urlConnection = url.openConnection();
					BufferedInputStream bis = new BufferedInputStream(urlConnection.getInputStream());
					BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream(
							fic));
					int c;
					int count = 0;
					while ((c = bis.read()) != -1) {
						bos.write(c);
						count++;
					}
					bis.close();
					bos.close();
					System.out.println("count = "+count);
					ok = 1;
					break;
				}
			} catch (Exception e) {
				System.out.println("Erreur readTile "+e.getMessage());
			}
			if (ok == 0) {
				System.out.println("tuile introuvable");
			}
		}
	}

}
