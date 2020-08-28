import React from 'react';

import Completed from '../../components/Completed';

function ResetCompleted() {
  return (
    <Completed
      title="Redefinição enviada!"
      subtitle="Boa, agora é só checar o e-mail que foi enviado para você redefinir sua senha e aproveitar os estudos."
      buttonText="Voltar ao login"
    ></Completed>
  );
}

export default ResetCompleted;
