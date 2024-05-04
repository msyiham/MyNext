import React from 'react';

const help = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-6">                            
                    <div className="subtitle  mb-3">Faq</div>
                    <h2 className=" mb20">Kumpulan pertanyaan</h2>
                    <p>Pertanyan yang mungkin akan ditanyakan atau sudah sering ditanyakan wkwk</p>
                </div>

                <div className="clearfix"></div>

                <div className="col-lg-6">

                    <div className="accordion accordion-flush" id="accflush">

                      <div className="accordion-item">
                        <h3 className="accordion-header" id="flush-h1">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-c1" aria-expanded="false" aria-controls="flush-c1">
                            Apakah pembuat (syiham) sayang mba cantik atau tidak?
                          </button>
                        </h3>
                        <div id="flush-c1" className="accordion-collapse collapse" aria-labelledby="flush-h1" data-bs-parent="#accflush">
                          <div className="accordion-body">
                              <p>Sayangg.</p>
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h3 className="accordion-header" id="flush-h2">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-c2" aria-expanded="false" aria-controls="flush-c2">
                          Apakah pembuat (syiham) sayang mba cantik atau tidak?
                          </button>
                        </h3>
                        <div id="flush-c2" className="accordion-collapse collapse" aria-labelledby="flush-h2" data-bs-parent="#accflush">
                          <div className="accordion-body">
                              <p>Sayanggg.</p>
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h3 className="accordion-header" id="flush-h3">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-c3" aria-expanded="false" aria-controls="flush-c3">
                          Apakah pembuat (syiham) sayang mba cantik atau tidak?
                          </button>
                        </h3>
                        <div id="flush-c3" className="accordion-collapse collapse" aria-labelledby="flush-h3" data-bs-parent="#accflush">
                          <div className="accordion-body">
                              <p>Sayangggg Bangettt.. ngeyel ae :v</p>
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h3 className="accordion-header" id="flush-h4">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-c4" aria-expanded="false" aria-controls="flush-c4">
                          Apakah pembuat bosan dengan mba cantik?
                          </button>
                        </h3>
                        <div id="flush-c4" className="accordion-collapse collapse" aria-labelledby="flush-h4" data-bs-parent="#accflush">
                          <div className="accordion-body">
                              <p>Enggaaaa bosannn tenang aee.. lek iki sekalii ae yoo takok e😭😭..</p>
                          </div>
                        </div>
                      </div>

                      {/* <div className="accordion-item">
                        <h3 className="accordion-header" id="flush-h5">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-c5" aria-expanded="false" aria-controls="flush-c5">
                             What is server latency or ping?
                          </button>
                        </h3>
                        <div id="flush-c5" className="accordion-collapse collapse" aria-labelledby="flush-h5" data-bs-parent="#accflush">
                          <div className="accordion-body">
                               <p>Server latency or ping measures the time it takes for data to travel between your computer and the game server. Lower ping values indicate better responsiveness and less lag.</p>
                          </div>
                        </div>
                      </div> */}

                    </div>
                    
                </div>

                <div className="col-lg-6">
                    <div className="accordion accordion-flush" id="accflush1">

                        <div className="accordion-item">
                        <h3 className="accordion-header" id="flush-h1-1">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-c1-1" aria-expanded="false" aria-controls="flush-c1-1">
                            Apakah tampilan HP dan Laptop beda?
                          </button>
                        </h3>
                        <div id="flush-c1-1" className="accordion-collapse collapse" aria-labelledby="flush-h1-1" data-bs-parent="#accflush1">
                          <div className="accordion-body">
                             <p>Ada perbedaan dari segi konten.. tapi tetap bisa dibuka dan diakses. Namun, lebih baik menggunakan Laptop, karena pengalaman pengguna lebih menarik🙏🙏</p>
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h3 className="accordion-header" id="flush-h2-1">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-c2-1" aria-expanded="false" aria-controls="flush-c2-1">
                            Apakah pembuat mendapat kesulitan?
                          </button>
                        </h3>
                        <div id="flush-c2-1" className="accordion-collapse collapse" aria-labelledby="flush-h2-1" data-bs-parent="#accflush1">
                          <div className="accordion-body">
                              <p>Tentu ada saja, karena ini baru pertama project dengan, framewrok React js + Next.js.</p>
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h3 className="accordion-header" id="flush-h3-1">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-c3-1" aria-expanded="false" aria-controls="flush-c3-1">
                            Apakah mba cantik boleh request konten kepada pembuat?
                          </button>
                        </h3>
                        <div id="flush-c3-1" className="accordion-collapse collapse" aria-labelledby="flush-h3-1" data-bs-parent="#accflush1">
                          <div className="accordion-body">
                             <p>Tentu sajaa boleh.</p>
                          </div>
                        </div>
                      </div>

                      {/* <div className="accordion-item">
                        <h3 className="accordion-header" id="flush-h4-1">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-c4-1" aria-expanded="false" aria-controls="flush-c4-1">
                            How much does game hosting cost?
                          </button>
                        </h3>
                        <div id="flush-c4-1" className="accordion-collapse collapse" aria-labelledby="flush-h4-1" data-bs-parent="#accflush1">
                          <div className="accordion-body">
                                <p>Game hosting costs vary depending on the provider, server type, and game. Prices can range from a few dollars per month for small servers to hundreds for high-performance dedicated servers.</p>
                            </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h3 className="accordion-header" id="flush-h5-1">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-c5-1" aria-expanded="false" aria-controls="flush-c5-1">
                            Is there 24/7 customer support?
                          </button>
                        </h3>
                        <div id="flush-c5-1" className="accordion-collapse collapse" aria-labelledby="flush-h5-1" data-bs-parent="#accflush1">
                          <div className="accordion-body">
                                <p>Many reputable game hosting providers offer 24/7 customer support to assist with technical issues and server management.</p>
                            </div>
                        </div>
                      </div> */}

                    </div>
                </div>


            </div>
        </div>
    );
}

export default help;