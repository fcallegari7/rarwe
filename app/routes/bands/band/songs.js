import Route from "@ember/routing/route";
import { service } from "@ember/service";

export default class BandsBandSongsRoute extends Route {
  @service catalog;

  async model() {
    let band = this.modelFor("bands.band");
    await this.catalog.fetchRelated(band, "songs");
    return band;
  }

  resetController(controller) {
    controller.title = "";
    controller.showAddSong = true;
  }
}
