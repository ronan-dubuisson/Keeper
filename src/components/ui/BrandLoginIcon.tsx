import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth } from "@src/hooks/useAuth";
import { Provider } from "@supabase/supabase-js";

interface Props {
  icon: IconDefinition;
  name: Provider;
}

function BrandLoginIcon({ icon, name }: Props) {
  const { oauthLogin } = useAuth();

  function handleOauthLogin() {
    oauthLogin(name);
  }

  return (
    <FontAwesomeIcon
      name={name}
      className="h-40px hover:text-brand-secundary-300 hover:transition-ease-out hover:transition-transform-300 hover:transform-scale-150"
      icon={icon}
      onClick={handleOauthLogin}
    />
  );
}

export default BrandLoginIcon;
