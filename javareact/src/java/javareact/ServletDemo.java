/*
 *  test
 */
package javareact;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Cheryl
 */
public class ServletDemo extends HttpServlet {
    @Override
    public void doGet(HttpServletRequest req, HttpServletResponse resp)
              throws IOException {
            resp.setContentType("text/plain");
            resp.getWriter().println("Hello, from doGet");        
    }    
    
	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
		String user = request.getParameter("user");
            response.setContentType("text/plain");
            response.getWriter().println("Hello, "+user+" from doPost");                    
        }
    
}
