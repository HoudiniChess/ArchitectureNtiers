package gpx;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;


public class TraceGpx {


	public String nom = "";
	public ArrayList <Pos> lpos = new ArrayList<Pos>();
	
	
	
	/******************************** chargerFichierGpx **************************************/
	
    public static ArrayList <TraceGpx> chargerFichierGpx(String ficGpx) {
 
		ArrayList <TraceGpx> ltraces = new ArrayList <TraceGpx>();
		
    	File f = new File(ficGpx);
    	if (!f.exists()) {
    		System.out.println("TraceGpx.chargerFichierGpx erreur Le fichier n'existe pas "+ficGpx);
    		return ltraces;
    	}
    	
    	try {
			ltraces = chargerFichierGpx(new FileInputStream(ficGpx));
		} catch (Exception e) {
    		System.out.println("TraceGpx.chargerFichierGpx erreur ouverture fichier "+ficGpx);			
		}
    	
    	return ltraces;

	}
	
    public static ArrayList <TraceGpx> chargerFichierGpx(InputStream is) {

    	ArrayList <TraceGpx> ltraces = new ArrayList <TraceGpx>();
    	   	
    
    	//if (0 == 0) return new ArrayList <TraceGpx>();

		int count = 0;
		try {
			BufferedReader br = new BufferedReader(new InputStreamReader(is,"utf-8"));
			String s;
			TraceGpx t = new TraceGpx();;
			while ((s = br.readLine()) != null) {
				
				//mess += "line "+s+"; ";
				
				if (s.indexOf("<name>") >= 0) {
					int pos1 = s.indexOf("<name>");
					int pos2 = s.indexOf("</name>");
					if ((pos1 >= 0) && (pos2 >= 0)) {
						t.nom = s.substring(pos1+"<name>".length(),pos2);
					}
				}
				if (s.indexOf("</trk>") >= 0) {
					ltraces.add(t);
					t = new TraceGpx();
					//Messages.add("TraceGpx.chargerFichierGpx fin trace");
				}
				if (s.indexOf("<trkpt ") >= 0) {
					int pos1 = s.indexOf("lon");
					int pos2 = s.indexOf("\"",pos1);
					int pos3 = s.indexOf("\"",pos2+1);
					int pos4 = s.indexOf("lat");
					int pos5 = s.indexOf("\"",pos4);
					int pos6 = s.indexOf("\"",pos5+1);
					int pos7 = s.indexOf("time");
					int pos8 = 0;
					int pos9 = 0;
					if (pos7 >= 0) {
						pos8 = s.indexOf("\"",pos7);
						pos9 = s.indexOf("\"",pos8+1);
					}
					Double lon = Double.parseDouble(s.substring(pos2+1,pos3));
					Double lat = Double.parseDouble(s.substring(pos5+1,pos6));
					long time = 0;
					if (pos7 >= 0) time = Long.parseLong(s.substring(pos8+1,pos9));
					t.lpos.add(new Pos(lon,lat,time));
					count++;
					//alert(" lon "+lon+" lat "+lat+" ");
				}
				
			}
			
			br.close();
			if (t.lpos.size() > 0) {
				ltraces.add(t);
			}
			if (ltraces.size() == 0) {
				ltraces.add(t);
			}
						
		} catch (Exception e) {
			System.out.println("TraceGpx.chargerFichierGpx erreur de lecture "+e.getMessage());
		}
		//System.out.println("TraceGpx.chargerFichierGpx nombre de traces GPX chargées : "+ltraces.size()+" (nombre total de points : "+count+")");

		//ltraces = new ArrayList<TraceGpx>();
		return ltraces;
    }

    public static ArrayList <TraceGpx> chargerFichierGpx(ArrayList <String> lst) {

    	ArrayList <TraceGpx> ltraces = new ArrayList <TraceGpx>();
    	   	
    
    	//if (0 == 0) return new ArrayList <TraceGpx>();

		int count = 0;
		try {
			TraceGpx t = new TraceGpx();;
			for (String s : lst) {
				
				//mess += "line "+s+"; ";
				
				if (s.indexOf("<name>") >= 0) {
					int pos1 = s.indexOf("<name>");
					int pos2 = s.indexOf("</name>");
					if ((pos1 >= 0) && (pos2 >= 0)) {
						t.nom = s.substring(pos1+"<name>".length(),pos2);
					}
				}
				if (s.indexOf("</trk>") >= 0) {
					ltraces.add(t);
					t = new TraceGpx();
					//Messages.add("TraceGpx.chargerFichierGpx fin trace");
				}
				if (s.indexOf("<trkpt ") >= 0) {
					int pos1 = s.indexOf("lon");
					int pos2 = s.indexOf("\"",pos1);
					int pos3 = s.indexOf("\"",pos2+1);
					int pos4 = s.indexOf("lat");
					int pos5 = s.indexOf("\"",pos4);
					int pos6 = s.indexOf("\"",pos5+1);
					int pos7 = s.indexOf("time");
					int pos8 = 0;
					int pos9 = 0;
					if (pos7 >= 0) {
						pos8 = s.indexOf("\"",pos7);
						pos9 = s.indexOf("\"",pos8+1);
					}
					Double lon = Double.parseDouble(s.substring(pos2+1,pos3));
					Double lat = Double.parseDouble(s.substring(pos5+1,pos6));
					long time = 0;
					if (pos7 >= 0) time = Long.parseLong(s.substring(pos8+1,pos9));
					t.lpos.add(new Pos(lon,lat,time));
					count++;
					//alert(" lon "+lon+" lat "+lat+" ");
				}
				
			}
			
			if (t.lpos.size() > 0) {
				ltraces.add(t);
			}
			if (ltraces.size() == 0) {
				ltraces.add(t);
			}
						
		} catch (Exception e) {
			System.out.println("TraceGpx.chargerFichierGpx erreur de lecture "+e.getMessage());
		}
		//System.out.println("TraceGpx.chargerFichierGpx nombre de traces GPX chargées : "+ltraces.size()+" (nombre total de points : "+count+")");

		//ltraces = new ArrayList<TraceGpx>();
		return ltraces;
    }

 
    public static void main(String [] args) {
    	ArrayList<TraceGpx> ltg = TraceGpx.chargerFichierGpx("/home/autret/tmp_tomcat2/2019_09_12_openlayers5_v0/WebContent/brest.gpx");
    	System.out.println("traces = "+ltg.size());
    }
	
}

