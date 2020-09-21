package gpx;


public class Pos {

	public Double lon = null;
	public Double lat = null;
	public long time = 0;

	public Pos() {
	}
	
	public Pos(double lon, double lat) {
		this.lon = lon;
		this.lat = lat;
	}

	public Pos(double lon, double lat, long time) {
		this.lon = lon;
		this.lat = lat;
		this.time = time;
	}

	public Double getLon() {
		return lon;
	}

	public void setLon(Double lon) {
		this.lon = lon;
	}

	public Double getLat() {
		return lat;
	}

	public void setLat(Double lat) {
		this.lat = lat;
	}
	
	
}

	
