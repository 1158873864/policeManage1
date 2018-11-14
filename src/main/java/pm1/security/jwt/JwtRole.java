package pm1.security.jwt;

import net.sf.json.JSONObject;
import pm1.publicdatas.account.Role;
import org.springframework.security.access.AccessDecisionManager;
import org.springframework.security.core.GrantedAuthority;

public class JwtRole implements GrantedAuthority {

    public static final JwtRole USER = new JwtRole(Role.USER.getName());
    public static final JwtRole ADMIN = new JwtRole(Role.ADMIN.getName());

    private String roleName;

    private JwtRole(String roleName) {
        this.roleName = roleName;
    }

    public JwtRole(JSONObject jsonObject) {
        this.roleName = (String) jsonObject.get("name");
    }

    public JwtRole(Role role) {
        this.roleName = role.getName();
    }

    /**
     * If the <code>GrantedAuthority</code> can be represented as a <code>String</code>
     * and that <code>String</code> is sufficient in precision to be relied upon for an
     * access control decision by an {@link AccessDecisionManager} (or delegate), this
     * method should return such a <code>String</code>.
     * <p>
     * If the <code>GrantedAuthority</code> cannot be expressed with sufficient precision
     * as a <code>String</code>, <code>null</code> should be returned. Returning
     * <code>null</code> will require an <code>AccessDecisionManager</code> (or delegate)
     * to specifically support the <code>GrantedAuthority</code> implementation, so
     * returning <code>null</code> should be avoided unless actually required.
     *
     * @return a representation of the granted authority (or <code>null</code> if the
     * granted authority cannot be expressed as a <code>String</code> with sufficient
     * precision).
     */
    @Override
    public String getAuthority() {
        return roleName;
    }
}
