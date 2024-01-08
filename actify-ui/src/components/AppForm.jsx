import { useState } from "react";
import { TextField, IconButton } from "actify";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

const AppForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="items-center gap-2 flex-wrap">
      <TextField label="Email" suffixText="@actifyjs.com">
        <TextField.LeadingIcon>
          <Mail />
        </TextField.LeadingIcon>
      </TextField>

      <br />
      <TextField
        label="Password"
        variant="outlined"
        autoComplete="off"
        type={showPassword ? "text" : "password"}
      >
        <TextField.LeadingIcon>
          <Lock />
        </TextField.LeadingIcon>

        <TextField.TrailingIcon>
          <IconButton onClick={() => setShowPassword((prev) => !prev)}>
            {showPassword ? <EyeOff /> : <Eye />}
          </IconButton>
        </TextField.TrailingIcon>
      </TextField>
    </form>
  );
};

export default AppForm;
