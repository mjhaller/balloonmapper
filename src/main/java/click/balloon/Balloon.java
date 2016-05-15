package click.balloon;

import java.util.UUID;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Balloon {

	private @Id @GeneratedValue Long id;
	private String trackingToken;
	private String startPoint;
	private String endPoint;

	public Balloon() {
		this.trackingToken = generateTrackingToken();
	}

	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}
	
	public static String generateTrackingToken()
	{
		return UUID.randomUUID().toString().substring(0, 6);
	}

	public String getTrackingToken() {
		return trackingToken;
	}

	public void setTrackingToken(String trackingToken) {
		this.trackingToken = trackingToken;

	}

	public String getStartPoint() {
		return startPoint;
	}

	public void setStartPoint(String startPoint) {
		this.startPoint = startPoint;
	}

	public String getEndPoint() {
		return endPoint;
	}

	public void setEndPoint(String endPoint) {
		this.endPoint = endPoint;
	}

}
