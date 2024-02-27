import MascotaList from "../../MascotaList";
import PropTypes from "prop-types";

function MascotaListPage({ categoria }) {
  return (
    <>
      <MascotaList categoria={categoria} />
    </>
  );
}

export default MascotaListPage;

MascotaListPage.propTypes = {
  categoria: PropTypes.string.isRequired,
};
