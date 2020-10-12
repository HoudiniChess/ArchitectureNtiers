package servlet;

import java.awt.Color;
import java.awt.Graphics2D;
import java.awt.image.BufferedImage;
import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;

import javax.imageio.ImageIO;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class Wms
 */
@WebServlet("/ServletTuile")
public class ServletTuile extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ServletTuile() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		String rep = request.getServletContext().getRealPath("/tuiles");
		
		String rep_ign = rep + "/ign_xyz";
		String rep_otm = rep + "/otm_xyz";
		
		try {
			String type = request.getParameter("type"); // ign otm
			String zoom = request.getParameter("zoom");
			String x = request.getParameter("x");
			String y = request.getParameter("y");
			
			if (type == null) type = "";
			if (zoom == null) zoom = "";
			if (x == null) x = "";
			if (y == null) y = "";

			String fic = "?";
			if (type.equals("otm")) {
				fic = rep_otm + "_"+ zoom + "/otm_"+zoom +"_"+x+"_"+y+".png";
			}
			else if (type.equals("ign")) {
				y = "" + (Integer.parseInt(y)+1);				
				fic = rep_ign + "_"+ zoom + "/ign_"+zoom +"_"+x+"_"+y+".jpg";
			}
			else {
				System.out.println("ServletTuile.doGet : erreur type "+type);
			}
			
			if (fic.endsWith(".png")) {
				response.setContentType("image/png");
			}
			else {
				response.setContentType("image/jpeg");
			}

			if ((fic == null) || !new File(fic).exists()) {
				fic = request.getServletContext().getRealPath("/") + "img/tuile.jpg";
				BufferedImage bim = ImageIO.read(new File(fic));
				Graphics2D g = bim.createGraphics();
				g.setColor(Color.black);
				g.drawString("z = "+zoom, 10,50);
				g.drawString("x = "+x, 10,70);
				g.drawString("y = "+y, 10,90);
				ImageIO.write(bim,"jpg",response.getOutputStream());
			}
			else {
			
				BufferedInputStream bis = new BufferedInputStream(
						new FileInputStream(fic));
				BufferedOutputStream bos = new BufferedOutputStream(response.getOutputStream());
				int c;
				while ((c = bis.read()) != -1) {
					bos.write(c);
				}
				bis.close();
				bos.close();
			}
		
		}
		catch (Exception e) {
			System.out.println("ServletTuile erreur "+e.getMessage());
		}
	}
	
	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}