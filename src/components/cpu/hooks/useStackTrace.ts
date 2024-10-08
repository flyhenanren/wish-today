import { StackTrace } from "../../../types"
export default function(){
   
    const stackTrace:StackTrace = {
        "children": [
          {
            "name": "genunix syscall_mstate",
            "id": "b25b0d27-ce7b-44e9-b2b6-ff168a6fa36c",
            "value": 89
          },
          {
            "children": [
              {
                "children": [
                  {
                    "children": [
                      {
                        "children": [
                          {
                            "children": [
                              {
                                "children": [
                                  {
                                    "children": [
                                      {
                                        "children": [
                                          {
                                            "name": "unix page_lookup_create",
                                            "value": 1,
                                            "id": "bb476309-a6c4-4a0c-bc63-27e8c693e9ee"
                                          }
                                        ],
                                        "name": "unix page_lookup",
                                        "value": 1,
                                        "id": "d8c76cd5-8d6f-4674-8a87-53fc31a17d23"
                                      }
                                    ],
                                    "name": "ufs ufs_getpage",
                                    "value": 1,
                                    "id": "0b4e8e87-92b1-4e55-b40e-2fc6a959fa8d"
                                  }
                                ],
                                "name": "genunix fop_getpage",
                                "value": 1,
                                "id": "5b374899-eadd-4da0-9669-39032726725d"
                              },
                              {
                                "children": [
                                  {
                                    "children": [
                                      {
                                        "children": [
                                          {
                                            "children": [
                                              {
                                                "children": [
                                                  {
                                                    "name": "genunix pvn_plist_init",
                                                    "value": 1,
                                                    "id": "985f8af3-e579-47c9-b937-8141e5180d91"
                                                  },
                                                  {
                                                    "name": "unix lgrp_mem_choose",
                                                    "value": 1,
                                                    "id": "89b04a7d-b28c-4434-81b4-d7cca5adb0ed"
                                                  },
                                                  {
                                                    "children": [
                                                      {
                                                        "children": [
                                                          {
                                                            "children": [
                                                              {
                                                                "name": "unix mutex_enter",
                                                                "value": 1,
                                                                "id": "6d6dfa5a-e15d-4460-aaf5-b4130062fa02"
                                                              }
                                                            ],
                                                            "name": "unix page_get_mnode_freelist",
                                                            "value": 1,
                                                            "id": "18f95faf-1e9d-4544-8171-5f594a38497b"
                                                          }
                                                        ],
                                                        "name": "unix page_get_freelist",
                                                        "value": 1,
                                                        "id": "1038d10c-a3f0-4050-95b4-0e4b7aa28877"
                                                      }
                                                    ],
                                                    "name": "unix page_create_va",
                                                    "value": 1,
                                                    "id": "8e78d682-54a0-4c71-8db8-f5d5cf609e48"
                                                  },
                                                  {
                                                    "children": [
                                                      {
                                                        "name": "unix page_lookup_create",
                                                        "value": 1,
                                                        "id": "ea6aacce-7ec1-4563-b578-d46ce8998d3e"
                                                      }
                                                    ],
                                                    "name": "unix page_lookup",
                                                    "value": 1,
                                                    "id": "e1ab8ac3-3be8-4419-8b27-e79a702d0933"
                                                  }
                                                ],
                                                "name": "genunix swap_getapage",
                                                "value": 4,
                                                "id": "5232d249-3b1c-4cf3-8d35-6a49cdd4ca33"
                                              }
                                            ],
                                            "name": "genunix swap_getpage",
                                            "value": 4,
                                            "id": "c1d90a58-5b34-44dc-afb4-71e113aa2ad7"
                                          }
                                        ],
                                        "name": "genunix fop_getpage",
                                        "value": 4,
                                        "id": "5d89bb8b-fe36-41d6-bee5-8bc627b9d69f"
                                      },
                                      {
                                        "children": [
                                          {
                                            "children": [
                                              {
                                                "name": "unix hwblkclr",
                                                "value": 3,
                                                "id": "ca04aae1-5084-4a16-87aa-fd0794c5605e"
                                              }
                                            ],
                                            "name": "unix pfnzero",
                                            "value": 3,
                                            "id": "b4dabb1c-8c2f-47ce-abf2-61665adf071b"
                                          }
                                        ],
                                        "name": "unix pagezero",
                                        "value": 3,
                                        "id": "9f58da02-3eb8-4cd4-8393-2e8f33b1312a"
                                      }
                                    ],
                                    "name": "genunix anon_zero",
                                    "value": 7,
                                    "id": "c3acb3b5-ec48-4101-ab89-74066ba7cf36"
                                  }
                                ],
                                "name": "genunix segvn_faultpage",
                                "value": 7,
                                "id": "1a5d714f-11fa-44df-a6d0-461cc0d1ee37"
                              },
                              {
                                "name": "ufs ufs_getpage",
                                "value": 1,
                                "id": "b16f30e3-41f6-48da-b5fc-593820038c97"
                              },
                              {
                                "children": [
                                  {
                                    "children": [
                                      {
                                        "children": [
                                          {
                                            "children": [
                                              {
                                                "children": [
                                                  {
                                                    "children": [
                                                      {
                                                        "children": [
                                                          {
                                                            "children": [
                                                              {
                                                                "name": "unix hment_compare",
                                                                "value": 1,
                                                                "id": "2c47dc5b-a5e3-47e0-a0ed-2069bc791aa0"
                                                              }
                                                            ],
                                                            "name": "genunix avl_find",
                                                            "value": 1,
                                                            "id": "2dd5edf2-0f12-4f95-99ae-7841a1687120"
                                                          }
                                                        ],
                                                        "name": "genunix avl_add",
                                                        "value": 1,
                                                        "id": "7736b2e6-1be1-4605-b203-1100e6362d48"
                                                      }
                                                    ],
                                                    "name": "unix hment_insert",
                                                    "value": 2,
                                                    "id": "79031563-629c-45ff-9356-ea54fd4c3124"
                                                  }
                                                ],
                                                "name": "unix hment_assign",
                                                "value": 2,
                                                "id": "eeb48a0e-aa42-4eeb-acc9-34eee3c55a5d"
                                              }
                                            ],
                                            "name": "unix hati_pte_map",
                                            "value": 2,
                                            "id": "33419774-1ee9-4005-bc8c-5ebfb6951e55"
                                          }
                                        ],
                                        "name": "unix hati_load_common",
                                        "value": 2,
                                        "id": "966b074a-a476-4f3d-9321-679a8825e610"
                                      }
                                    ],
                                    "name": "unix hat_memload",
                                    "value": 2,
                                    "id": "8a04dd2b-37f9-4f27-8f30-1f31e79fd556"
                                  }
                                ],
                                "name": "unix hat_memload_region",
                                "value": 2,
                                "id": "42a7e8e5-4a76-4757-bdf1-0332d22a14fc"
                              }
                            ],
                            "name": "genunix segvn_fault",
                            "value": 11,
                            "id": "d1038d15-a8ae-4bdd-b0dc-2e71f4847948"
                          }
                        ],
                        "name": "genunix as_fault",
                        "value": 12,
                        "id": "5fa6ae34-6380-4a66-8fe5-98823f075958"
                      },
                      {
                        "name": "genunix segvn_fault",
                        "value": 1,
                        "id": "7c853742-390b-4201-a1db-0b5bd02bb369"
                      }
                    ],
                    "name": "unix pagefault",
                    "value": 13,
                    "id": "0e50c834-9785-462a-892b-f4be8214e1b0"
                  }
                ],
                "name": "unix trap",
                "value": 13,
                "id": "cb04a063-4781-487a-95b1-5b5ef22f024d"
              }
            ],
            "name": "unix 0xfffffffffb8001d6",
            "value": 13,
            "id": "f775c1e7-f63d-447c-94d4-93cf81123782"
          },
          {
            "name": "unix 0xfffffffffb800c7c",
            "value": 42,
            "id": "cb01f245-8086-4b60-987b-32b9d96b9165"
          },
          {
            "name": "unix 0xfffffffffb800c81",
            "value": 2,
            "id": "03eb77eb-7ba5-45fb-870f-022e210ef87c"
          },
          {
            "children": [
              {
                "name": "genunix gethrtime_unscaled",
                "value": 4,
                "id": "302ef61c-9ff3-4b96-bb66-cb4df88b3e80"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "name": "unix tsc_gethrtimeunscaled",
                        "value": 11,
                        "id": "a4cb8a3e-1f2e-4957-827c-8dbab3baca24"
                      },
                      {
                        "name": "unix tsc_read",
                        "value": 186,
                        "id": "f337ff3f-863f-4bd3-a357-cbeeec2505e3"
                      }
                    ],
                    "name": "genunix gethrtime_unscaled",
                    "value": 203,
                    "id": "a7d2c7b9-ded7-497f-b007-e17706bdc8ee"
                  },
                  {
                    "name": "unix tsc_gethrtimeunscaled",
                    "value": 13,
                    "id": "817bcceb-cbe4-4195-93dc-83ffc4ea29b5"
                  }
                ],
                "name": "genunix syscall_mstate",
                "value": 355,
                "id": "1567af28-e06a-493c-9f97-0b559e207272"
              },
              {
                "name": "unix atomic_add_64",
                "value": 110,
                "id": "557c1e0a-addc-4a4c-b89e-1d3fe5a7042a"
              }
            ],
            "name": "unix 0xfffffffffb800c86",
            "value": 472,
            "id": "d4542713-1516-4105-b6be-d5d8e7e3c6bd"
          },
          {
            "children": [
              {
                "name": "genunix audit_getstate",
                "value": 27,
                "id": "a6c381c8-fcd9-4029-aa3e-38c8508a2cbe"
              },
              {
                "name": "genunix clear_stale_fd",
                "value": 10,
                "id": "f938697c-9bfa-4d16-8820-8caec831016c"
              },
              {
                "name": "genunix disp_lock_exit",
                "value": 27,
                "id": "ea1bd957-88d9-4967-a0ac-4013bc14cc0c"
              },
              {
                "children": [
                  {
                    "name": "FSS fss_preempt",
                    "value": 1,
                    "id": "4671688a-b056-4c5b-8bf5-c32dd613490f"
                  },
                  {
                    "name": "genunix audit_getstate",
                    "value": 15,
                    "id": "ebfda23b-8c6f-4e5d-8991-14d979cfca7c"
                  },
                  {
                    "name": "genunix clear_stale_fd",
                    "value": 44,
                    "id": "4c80bf54-1530-434f-89ec-11c12aa3696b"
                  },
                  {
                    "children": [
                      {
                        "name": "unix clear_int_flag",
                        "value": 39,
                        "id": "1392dcb0-6ba7-4ed6-9bd6-790d8a5875db"
                      },
                      {
                        "name": "unix do_splx",
                        "value": 1993,
                        "id": "06fdbb60-1fc2-4ba6-9a5d-9bebb3e990d9"
                      },
                      {
                        "children": [
                          {
                            "children": [
                              {
                                "children": [
                                  {
                                    "name": "unix do_splx",
                                    "value": 1,
                                    "id": "a779133c-110c-411c-8e4e-1d84b296dd7f"
                                  }
                                ],
                                "name": "genunix disp_lock_exit_nopreempt",
                                "value": 1,
                                "id": "ecb7c991-193f-49f3-9a1d-93c70683040e"
                              }
                            ],
                            "name": "unix preempt",
                            "value": 1,
                            "id": "523a5663-fded-4e3c-b645-e85e8d9757c2"
                          }
                        ],
                        "name": "unix kpreempt",
                        "value": 1,
                        "id": "a9396bbc-fc17-4625-9121-3c021b7f8b7c"
                      }
                    ],
                    "name": "genunix disp_lock_exit",
                    "value": 2096,
                    "id": "77675fcf-4bb7-4f51-9e72-67f57f9c9f42"
                  },
                  {
                    "name": "genunix sigcheck",
                    "value": 1,
                    "id": "fea79d7d-1502-45f4-a537-85b436c3d330"
                  },
                  {
                    "children": [
                      {
                        "name": "unix clear_int_flag",
                        "value": 180,
                        "id": "9d0e710a-2e82-4109-bac2-bb435b4e9794"
                      },
                      {
                        "name": "unix splr",
                        "value": 400,
                        "id": "cf04db55-3b84-4bf2-9eec-807ec4713582"
                      }
                    ],
                    "name": "genunix thread_lock",
                    "value": 670,
                    "id": "0daad78e-01ff-46dc-8bce-6ae7f558f12a"
                  },
                  {
                    "name": "unix do_splx",
                    "value": 31,
                    "id": "5e8ce37d-565d-4dba-9640-1a135cca41de"
                  },
                  {
                    "name": "unix i_ddi_splhigh",
                    "value": 23,
                    "id": "b8ea3383-5b64-4478-8a9c-32a42686c850"
                  },
                  {
                    "name": "unix lock_clear_splx",
                    "value": 28,
                    "id": "224b4baa-6d00-481d-9d25-836283c10b4e"
                  },
                  {
                    "name": "unix lock_try",
                    "value": 778,
                    "id": "9fbc0f3a-b7ba-497f-ab0d-154b9abc8810"
                  },
                  {
                    "name": "unix lwp_getdatamodel",
                    "value": 6,
                    "id": "0242b08b-6992-452f-b36d-c17915b43cfc"
                  },
                  {
                    "children": [
                      {
                        "children": [
                          {
                            "children": [
                              {
                                "children": [
                                  {
                                    "children": [
                                      {
                                        "name": "unix tsc_gethrtimeunscaled",
                                        "value": 1,
                                        "id": "b8432b71-b4b9-47e8-b044-80a8964abe62"
                                      }
                                    ],
                                    "name": "genunix mstate_thread_onproc_time",
                                    "value": 1,
                                    "id": "4da6087f-2f81-438f-86c3-5f6b62a0225a"
                                  }
                                ],
                                "name": "unix caps_charge_adjust",
                                "id": "1b40dc09-5b61-4e5d-8654-3b8dd2c71102",
                                "value": 1
                              }
                            ],
                            "name": "unix cpucaps_charge",
                            "value": 3,
                            "id": "8b223d48-8c80-4461-aad4-e89bc5ef3774"
                          },
                          {
                            "children": [
                              {
                                "name": "unix cmt_balance",
                                "value": 1,
                                "id": "d2d02227-fdf6-4c42-ae85-5c422109cd6e"
                              },
                              {
                                "children": [
                                  {
                                    "name": "unix bitset_in_set",
                                    "value": 1,
                                    "id": "bab1813a-3b30-4e2b-8a7b-f8f14d05a818"
                                  }
                                ],
                                "name": "unix cpu_wakeup_mwait",
                                "value": 1,
                                "id": "5c5376b7-8718-4770-b562-5692a3ae3b48"
                              }
                            ],
                            "name": "unix setbackdq",
                            "value": 5,
                            "id": "169c7d7e-c805-44ad-a757-7158b53f029e"
                          }
                        ],
                        "name": "FSS fss_preempt",
                        "value": 8,
                        "id": "1508f01c-18a6-4173-b96b-100749f18363"
                      },
                      {
                        "name": "unix do_splx",
                        "value": 1,
                        "id": "91654d1f-9f75-4018-a6fb-61fadd2abfae"
                      },
                      {
                        "children": [
                          {
                            "name": "genunix disp_lock_exit_high",
                            "value": 1,
                            "id": "cf153ace-832d-407e-a417-08f7b9e04640"
                          },
                          {
                            "children": [
                              {
                                "name": "unix membar_enter",
                                "value": 1,
                                "id": "d53284f0-9d08-455f-9eda-90750eda280e"
                              }
                            ],
                            "name": "unix disp",
                            "value": 1,
                            "id": "e86559bc-abee-4f1e-adb9-4668735f4174"
                          },
                          {
                            "name": "unix do_splx",
                            "value": 1,
                            "id": "624a34e8-739d-425e-9cb2-4b84255d69ba"
                          },
                          {
                            "children": [
                              {
                                "children": [
                                  {
                                    "name": "genunix schedctl_save",
                                    "value": 1,
                                    "id": "8cbfe023-77ed-4aa4-a229-627d3a1759e5"
                                  }
                                ],
                                "name": "genunix savectx",
                                "value": 2,
                                "id": "1ca6a77d-5973-4366-a1f1-6fe4529fc5eb"
                              }
                            ],
                            "name": "unix resume",
                            "value": 2,
                            "id": "16d14ec7-3c7e-478b-af7b-0e83e3c10c2c"
                          }
                        ],
                        "name": "unix swtch",
                        "value": 5,
                        "id": "518392ed-233c-48b3-b85f-594b0b4583dd"
                      }
                    ],
                    "name": "unix preempt",
                    "value": 14,
                    "id": "80a6c19b-4445-46e2-a936-8c92190e7c68"
                  },
                  {
                    "name": "unix prunstop",
                    "value": 36,
                    "id": "8dade592-3b02-4fce-af12-2ab6df0f2929"
                  },
                  {
                    "name": "unix splr",
                    "value": 92,
                    "id": "9dc6dd7d-bb1f-4fc5-9524-94f58a0d938f"
                  },
                  {
                    "name": "unix splx",
                    "value": 6,
                    "id": "c1986a81-e8fb-421e-864a-36121815c00b"
                  }
                ],
                "name": "genunix post_syscall",
                "value": 4245,
                "id": "022f7903-2354-4333-99d7-dcae2c769332"
              },
              {
                "name": "genunix thread_lock",
                "value": 33,
                "id": "097552b9-7768-40c3-b1b2-843497b9af6b"
              },
              {
                "name": "unix lwp_getdatamodel",
                "value": 3,
                "id": "27c99ac9-e503-4129-aed7-6f6877eb6191"
              },
              {
                "name": "unix prunstop",
                "value": 2,
                "id": "153bf669-3ed1-43ab-80f3-07f68e6c0fe7"
              }
            ],
            "name": "unix 0xfffffffffb800c91",
            "value": 4361,
            "id": "c69602fb-4008-4ffb-93a4-2cf4f38be712"
          },
          {
            "children": [
              {
                "name": "genunix gethrtime_unscaled",
                "value": 7,
                "id": "3e52356d-42d9-4efb-bb9f-02e24bf5b870"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "name": "unix tsc_gethrtimeunscaled",
                        "value": 17,
                        "id": "1b4dba3b-e13f-45bc-88bd-497b2f5f5163"
                      },
                      {
                        "name": "unix tsc_read",
                        "value": 160,
                        "id": "3afe825e-16b5-4523-a387-fbc01fa46de9"
                      }
                    ],
                    "name": "genunix gethrtime_unscaled",
                    "value": 182,
                    "id": "8038c270-2670-4838-8fd4-37714b1fb675"
                  },
                  {
                    "name": "unix tsc_gethrtimeunscaled",
                    "value": 12,
                    "id": "5e8ec51c-029c-4182-b828-8b2adad8c520"
                  }
                ],
                "name": "genunix syscall_mstate",
                "value": 412,
                "id": "fb9643eb-9022-45bf-a07f-c06860f53f8f"
              },
              {
                "name": "unix atomic_add_64",
                "value": 95,
                "id": "d088a382-57ef-486c-8e84-0155dbdb7061"
              }
            ],
            "name": "unix 0xfffffffffb800ca0",
            "value": 517,
            "id": "60e7cc31-07a6-4931-b678-0cff919cea6c"
          },
          {
            "name": "unix _sys_rtt",
            "value": 6,
            "id": "2ba36674-9707-448a-8e9f-0105731a0de7"
          },
          {
            "children": [
              {
                "children": [
                  {
                    "children": [
                      {
                        "children": [
                          {
                            "children": [
                              {
                                "children": [
                                  {
                                    "name": "genunix cpu_decay",
                                    "value": 1,
                                    "id": "2e4c2849-3ed6-4fe1-9e57-3df80fedafbd"
                                  }
                                ],
                                "name": "genunix cpu_grow",
                                "value": 1,
                                "id": "692fbd43-1837-4de2-9823-2f9fabf6e87d"
                              }
                            ],
                            "name": "genunix cpu_update_pct",
                            "value": 1,
                            "id": "1c8ceb18-6020-4b29-8758-95c9e65640e0"
                          }
                        ],
                        "name": "genunix new_mstate",
                        "value": 1,
                        "id": "f702ddbb-772c-43ab-92f7-2d96a688f08b"
                      }
                    ],
                    "name": "unix trap",
                    "value": 1,
                    "id": "63ce4716-abd3-41ed-aad8-9a9a6a711444"
                  }
                ],
                "name": "unix sys_rtt_common",
                "value": 1,
                "id": "122badd8-838e-49c7-af3c-e1acb662a552"
              }
            ],
            "name": "unix _sys_rtt_ints_disabled",
            "value": 1,
            "id": "abe470ad-c49e-4756-94ed-ac0d50fde760"
          },
          {
            "children": [
              {
                "children": [
                  {
                    "children": [
                      {
                        "children": [
                          {
                            "children": [
                              {
                                "children": [
                                  {
                                    "children": [
                                      {
                                        "name": "doorfs door_close",
                                        "value": 1,
                                        "id": "b78eec38-2509-41dd-8b71-dc67702caf33"
                                      }
                                    ],
                                    "name": "namefs nm_close",
                                    "value": 1,
                                    "id": "5f135145-2cf8-4486-8a7a-d075ecfa600c"
                                  }
                                ],
                                "name": "genunix fop_close",
                                "value": 1,
                                "id": "ec80245c-5ab6-45e6-81b7-a45bdce81b61"
                              }
                            ],
                            "name": "genunix closef",
                            "value": 1,
                            "id": "70de5905-56da-4bec-a48b-f4f499f7d126"
                          }
                        ],
                        "name": "genunix close_exec",
                        "value": 1,
                        "id": "582dd6cb-572a-4586-82d9-76db71c342ff"
                      }
                    ],
                    "name": "genunix exec_common",
                    "value": 1,
                    "id": "b1a5798e-8d43-495b-81ba-11f2cfb8d798"
                  }
                ],
                "name": "genunix exece",
                "value": 1,
                "id": "b152c57a-528d-48bd-9853-0c18b92267cd"
              }
            ],
            "name": "unix _sys_sysenter_post_swapgs",
            "value": 1,
            "id": "291bff3a-192d-4e45-92fd-66e456c0304c"
          },
          {
            "children": [
              {
                "name": "genunix gethrtime_unscaled",
                "value": 11,
                "id": "88074673-6839-4c57-b457-71be1d748182"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "children": [
                          {
                            "children": [
                              {
                                "children": [
                                  {
                                    "children": [
                                      {
                                        "children": [
                                          {
                                            "children": [
                                              {
                                                "children": [
                                                  {
                                                    "children": [
                                                      {
                                                        "name": "unix mtype_func",
                                                        "value": 1,
                                                        "id": "8c5479b5-b0fc-4193-9bdd-a23d6db1b32c"
                                                      },
                                                      {
                                                        "name": "unix mutex_enter",
                                                        "value": 1,
                                                        "id": "8cff20d1-7fea-413d-8e06-e6477ce55a0f"
                                                      }
                                                    ],
                                                    "name": "unix page_get_mnode_freelist",
                                                    "value": 2,
                                                    "id": "1fab757a-455f-460e-8802-723a82291572"
                                                  }
                                                ],
                                                "name": "unix page_get_freelist",
                                                "value": 2,
                                                "id": "5b79e557-75f8-4a18-8387-a17172051690"
                                              }
                                            ],
                                            "name": "unix page_create_va",
                                            "value": 3,
                                            "id": "d9383e2f-3344-4204-83a4-529e2234125f"
                                          }
                                        ],
                                        "name": "genunix pvn_read_kluster",
                                        "value": 3,
                                        "id": "33be25c7-65ab-4d06-9ed8-4d5bcec84876"
                                      }
                                    ],
                                    "name": "ufs ufs_getpage_ra",
                                    "value": 3,
                                    "id": "ff717c0c-e3f5-4792-a3f9-ce462768a5b7"
                                  }
                                ],
                                "name": "ufs ufs_getpage",
                                "value": 3,
                                "id": "12521c2e-34ca-40c1-873e-2f540818fe6e"
                              }
                            ],
                            "name": "genunix fop_getpage",
                            "value": 3,
                            "id": "a1b1840c-a725-4773-8d59-b032d5653108"
                          }
                        ],
                        "name": "genunix segvn_faulta",
                        "value": 3,
                        "id": "09022235-7f78-46e5-becc-18f416751023"
                      }
                    ],
                    "name": "genunix as_faulta",
                    "value": 3,
                    "id": "0a8f3456-3561-4561-9db8-9928b055ff95"
                  }
                ],
                "name": "genunix memcntl",
                "value": 3,
                "id": "904cc5fc-e3fc-4d12-8d8d-c7f8b694b6da"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "children": [
                          {
                            "children": [
                              {
                                "children": [
                                  {
                                    "children": [
                                      {
                                        "children": [
                                          {
                                            "children": [
                                              {
                                                "name": "unix htable_lookup",
                                                "value": 1,
                                                "id": "59d52056-1ee1-4755-9f7d-f9f14ad38ed2"
                                              }
                                            ],
                                            "name": "unix htable_walk",
                                            "value": 1,
                                            "id": "ecad92ad-e213-46a0-b25e-fb51b59bb755"
                                          }
                                        ],
                                        "name": "unix hat_unload_callback",
                                        "value": 1,
                                        "id": "3e0d2b42-df39-4aa8-8c70-e85daf05c9ee"
                                      }
                                    ],
                                    "name": "genunix segvn_unmap",
                                    "value": 1,
                                    "id": "638e347b-2dbf-4cb9-881b-4082cb24c531"
                                  }
                                ],
                                "name": "genunix as_unmap",
                                "value": 1,
                                "id": "087845c8-1413-4ba9-88d1-e4b1668c53c7"
                              }
                            ],
                            "name": "unix mmapobj_map_elf",
                            "value": 1,
                            "id": "7cff3d51-0972-4da4-b73f-119a4052bb8d"
                          }
                        ],
                        "name": "unix mmapobj_map_interpret",
                        "value": 1,
                        "id": "b047438e-bcad-41f2-a6aa-e2ab0cfd87e9"
                      }
                    ],
                    "name": "unix mmapobj",
                    "value": 1,
                    "id": "42688244-6f14-4e0a-a517-1db58fd1d285"
                  }
                ],
                "name": "genunix mmapobjsys",
                "value": 1,
                "id": "bb0af9ce-182e-48d1-84ee-1c522b51a9de"
              },
              {
                "children": [
                  {
                    "name": "genunix copen",
                    "value": 7,
                    "id": "66704c79-92df-49c0-8ee8-458f050a5def"
                  },
                  {
                    "children": [
                      {
                        "name": "genunix audit_getstate",
                        "value": 62,
                        "id": "7d71a6e1-4058-47a9-9ef0-cec63c35cd02"
                      },
                      {
                        "children": [
                          {
                            "name": "genunix audit_falloc",
                            "value": 8,
                            "id": "0f8ec4f5-e854-4163-ba30-c20992471425"
                          },
                          {
                            "children": [
                              {
                                "children": [
                                  {
                                    "children": [
                                      {
                                        "children": [
                                          {
                                            "children": [
                                              {
                                                "name": "unix swtch",
                                                "value": 1,
                                                "id": "34e7c45f-3a4d-4f99-b0a7-6fb03b3fed12"
                                              }
                                            ],
                                            "name": "unix preempt",
                                            "value": 1,
                                            "id": "ee260c11-d21e-42f4-b5ab-27844ea25873"
                                          }
                                        ],
                                        "name": "unix kpreempt",
                                        "value": 1,
                                        "id": "a7d37ed1-7735-4437-a2e0-32c25dfad98d"
                                      }
                                    ],
                                    "name": "unix sys_rtt_common",
                                    "value": 1,
                                    "id": "7b8ec187-72b9-4fbe-978c-6675f6f14c41"
                                  }
                                ],
                                "name": "unix _sys_rtt_ints_disabled",
                                "value": 1,
                                "id": "95cb7e53-cdf5-490e-97d6-e1bcedca4c8e"
                              }
                            ],
                            "name": "genunix audit_getstate",
                            "value": 66,
                            "id": "6388ee86-0b60-49b6-bbba-8873fd898a03"
                          },
                          {
                            "name": "genunix audit_unfalloc",
                            "value": 32,
                            "id": "f6104c18-ab48-48cc-ba97-b02813d2cdfc"
                          },
                          {
                            "name": "genunix crfree",
                            "value": 9,
                            "id": "10614795-f74e-497b-8854-a1d9041692d9"
                          },
                          {
                            "name": "genunix crhold",
                            "value": 5,
                            "id": "c1cb5356-e0f7-460a-b14f-e171eccaa5c7"
                          },
                          {
                            "name": "genunix cv_broadcast",
                            "value": 16,
                            "id": "80a2f5b3-d292-4869-b882-1b968f7e64df"
                          },
                          {
                            "children": [
                              {
                                "children": [
                                  {
                                    "name": "genunix kmem_cache_alloc",
                                    "value": 11,
                                    "id": "69d5d903-3a46-4ab9-8a9f-1dc19b3a92d7"
                                  },
                                  {
                                    "children": [
                                      {
                                        "name": "genunix kmem_cache_alloc",
                                        "value": 66,
                                        "id": "53131460-d475-41cb-be81-1d49b6704eaa"
                                      },
                                      {
                                        "name": "unix mutex_enter",
                                        "value": 122,
                                        "id": "c6e1f246-a657-47e0-bb02-ac86f99b0f68"
                                      },
                                      {
                                        "name": "unix mutex_exit",
                                        "value": 46,
                                        "id": "6e41b72a-f711-489b-903b-5a378ec7bb3e"
                                      }
                                    ],
                                    "name": "genunix kmem_zalloc",
                                    "value": 280,
                                    "id": "bf17927e-3282-4b2f-933b-0ae7e881357e"
                                  },
                                  {
                                    "name": "unix bzero",
                                    "value": 8,
                                    "id": "d46b5cf2-4436-4cbb-8032-4c302daa7463"
                                  }
                                ],
                                "name": "genunix audit_falloc",
                                "value": 313,
                                "id": "8767986b-106c-47ba-843e-d1da779d2cce"
                              },
                              {
                                "name": "genunix crhold",
                                "value": 11,
                                "id": "61d38704-b62e-490e-a811-d052914c398d"
                              },
                              {
                                "name": "genunix kmem_cache_alloc",
                                "value": 49,
                                "id": "8a6c6561-605b-49cf-879f-266ce883cc82"
                              },
                              {
                                "name": "genunix kmem_zalloc",
                                "value": 13,
                                "id": "b64f15ce-b576-41cc-837b-aa75464c38f0"
                              },
                              {
                                "children": [
                                  {
                                    "name": "genunix fd_find",
                                    "value": 13,
                                    "id": "cdb688ac-dd05-4c3e-acd8-95ba9f47c09c"
                                  },
                                  {
                                    "name": "genunix fd_reserve",
                                    "value": 9,
                                    "id": "97afbdca-4b07-46f7-853c-19aa586240ea"
                                  },
                                  {
                                    "children": [
                                      {
                                        "name": "genunix fd_find",
                                        "value": 161,
                                        "id": "3825a4ab-bb2d-4f00-8e05-4ba48418fde7"
                                      },
                                      {
                                        "name": "genunix fd_reserve",
                                        "value": 15,
                                        "id": "ed772450-53f9-408f-9457-c3b70509fab6"
                                      }
                                    ],
                                    "name": "genunix ufalloc_file",
                                    "value": 294,
                                    "id": "7fb6d491-179e-4f52-8a8c-a5ec886cbdd4"
                                  },
                                  {
                                    "name": "unix mutex_enter",
                                    "value": 197,
                                    "id": "f34f3d02-1321-4c96-95a8-408ba21f6cfe"
                                  },
                                  {
                                    "name": "unix mutex_exit",
                                    "value": 29,
                                    "id": "121eea01-bf45-4e3d-b93e-ad15508c4ab9"
                                  }
                                ],
                                "name": "genunix ufalloc",
                                "value": 551,
                                "id": "ac0db323-ebce-4fa2-bc6f-415397463aff"
                              },
                              {
                                "name": "genunix ufalloc_file",
                                "value": 20,
                                "id": "c5069a6f-dc2b-4393-a27a-1c0dad47f80e"
                              },
                              {
                                "name": "unix atomic_add_32",
                                "value": 134,
                                "id": "7591cd67-e2e3-41b3-8cf6-51834b95112e"
                              },
                              {
                                "name": "unix mutex_enter",
                                "value": 99,
                                "id": "f645a660-1301-4648-b2d6-087b5bd2cb5c"
                              },
                              {
                                "name": "unix mutex_exit",
                                "value": 58,
                                "id": "a9edc8ec-73aa-43b1-bbfa-ea260f23f625"
                              }
                            ],
                            "name": "genunix falloc",
                            "value": 1363,
                            "id": "385d02b3-8961-4088-8021-9c23680d8528"
                          },
                          {
                            "name": "genunix fd_reserve",
                            "value": 8,
                            "id": "5b9523b9-9f1f-4b3c-9353-46253672ac10"
                          },
                          {
                            "name": "genunix kmem_cache_alloc",
                            "value": 9,
                            "id": "59df9f2b-88f2-47d8-a7da-359961720442"
                          },
                          {
                            "name": "genunix kmem_cache_free",
                            "value": 5,
                            "id": "58dbaf9d-98e8-44e9-8b10-45576d51bd31"
                          },
                          {
                            "name": "genunix lookupnameat",
                            "value": 69,
                            "id": "436403bc-503a-452b-a5f4-0d04713ebbaf"
                          },
                          {
                            "name": "genunix set_errno",
                            "value": 24,
                            "id": "e29fd7c6-4afb-425f-88c0-527956cd4c54"
                          },
                          {
                            "children": [
                              {
                                "name": "genunix audit_getstate",
                                "value": 31,
                                "id": "bd50cfe4-287b-454a-9169-496288a64ddb"
                              },
                              {
                                "name": "genunix cv_broadcast",
                                "value": 25,
                                "id": "a235a3c5-e53c-4d58-b7a2-8c01b8d49001"
                              },
                              {
                                "name": "genunix fd_reserve",
                                "value": 35,
                                "id": "6ed6ede4-52dd-4bfd-93a3-324bde62b0e2"
                              }
                            ],
                            "name": "genunix setf",
                            "value": 187,
                            "id": "e1b7e05d-9138-4086-8c31-c62b9767a4cf"
                          },
                          {
                            "name": "genunix ufalloc",
                            "value": 10,
                            "id": "05775a1b-d5c3-4da9-aa71-1140c45f5a57"
                          },
                          {
                            "children": [
                              {
                                "children": [
                                  {
                                    "name": "genunix kmem_cache_free",
                                    "value": 5,
                                    "id": "e08b64dc-886f-4776-be5e-d04f48143f81"
                                  },
                                  {
                                    "children": [
                                      {
                                        "name": "genunix kmem_cache_free",
                                        "value": 73,
                                        "id": "5ab68757-09bc-4fcd-84b6-40ee15374a20"
                                      },
                                      {
                                        "name": "unix mutex_enter",
                                        "value": 111,
                                        "id": "f6d1defc-b288-49fb-bb8c-8e9beeacd58f"
                                      },
                                      {
                                        "name": "unix mutex_exit",
                                        "value": 55,
                                        "id": "7fe30f19-0776-47eb-b1eb-99e5dbb32383"
                                      }
                                    ],
                                    "name": "genunix kmem_free",
                                    "value": 288,
                                    "id": "aba568d5-4b43-441d-9045-57a757e07f1e"
                                  }
                                ],
                                "name": "genunix audit_unfalloc",
                                "value": 340,
                                "id": "3e701b08-5fd7-4594-af64-e5afaa1e5f29"
                              },
                              {
                                "name": "genunix crfree",
                                "value": 13,
                                "id": "fd4e01ee-10ad-470d-9864-a7bbea53904b"
                              },
                              {
                                "name": "genunix kmem_cache_free",
                                "value": 51,
                                "id": "d9248709-b87d-4f46-9d6e-058867460ada"
                              },
                              {
                                "name": "genunix kmem_free",
                                "value": 11,
                                "id": "b17735a3-249d-4e89-aed5-b7792ba70175"
                              },
                              {
                                "name": "unix atomic_add_32_nv",
                                "value": 100,
                                "id": "455048e7-e867-42db-a165-35d42bfbc9f9"
                              },
                              {
                                "name": "unix mutex_enter",
                                "value": 97,
                                "id": "f9ac39dc-7488-4ac2-8e41-49abd725d17b"
                              },
                              {
                                "name": "unix mutex_exit",
                                "value": 56,
                                "id": "467cb5a3-04d1-4b12-ac9d-43f9e7fd44fd"
                              }
                            ],
                            "name": "genunix unfalloc",
                            "value": 729,
                            "id": "8d85c436-3755-4e11-8c0f-ea0df4684a52"
                          },
                          {
                            "children": [
                              {
                                "children": [
                                  {
                                    "children": [
                                      {
                                        "children": [
                                          {
                                            "name": "genunix audit_getstate",
                                            "value": 16,
                                            "id": "4032bade-6367-440c-9644-d670737535d1"
                                          },
                                          {
                                            "name": "genunix fop_lookup",
                                            "value": 55,
                                            "id": "06881713-bd6e-4f75-9433-cb8388820dad"
                                          },
                                          {
                                            "children": [
                                              {
                                                "name": "genunix audit_getstate",
                                                "value": 21,
                                                "id": "511df6db-944f-485f-b9a3-7b975963b6f0"
                                              },
                                              {
                                                "name": "genunix crgetmapped",
                                                "value": 55,
                                                "id": "84eda64e-eaf7-42e9-bc4d-54ef2045c289"
                                              },
                                              {
                                                "name": "genunix fop_inactive",
                                                "value": 39,
                                                "id": "f48a005b-cf10-4f07-83a2-fd36fbf45df8"
                                              },
                                              {
                                                "children": [
                                                  {
                                                    "name": "genunix crgetmapped",
                                                    "value": 57,
                                                    "id": "014dcda0-6be2-4ed3-8a54-3f9c9d00e111"
                                                  },
                                                  {
                                                    "name": "genunix dnlc_lookup",
                                                    "value": 26,
                                                    "id": "c83c4184-7fa7-45ac-a132-f9274bdf229e"
                                                  },
                                                  {
                                                    "name": "genunix fop_lookup",
                                                    "value": 85,
                                                    "id": "8a6f4f33-cba5-4297-8914-ed41878a154c"
                                                  },
                                                  {
                                                    "name": "genunix kmem_alloc",
                                                    "value": 73,
                                                    "id": "f649e376-cf02-4d5b-9d6f-d2a96e81d402"
                                                  },
                                                  {
                                                    "name": "genunix traverse",
                                                    "value": 30,
                                                    "id": "28e4cdbd-26cb-4b3d-844d-6e8bb5114664"
                                                  },
                                                  {
                                                    "name": "genunix vfs_matchops",
                                                    "value": 28,
                                                    "id": "7b7582c2-078b-4738-a183-2c8d958e9fdd"
                                                  },
                                                  {
                                                    "children": [
                                                      {
                                                        "children": [
                                                          {
                                                            "name": "genunix kmem_cache_alloc",
                                                            "value": 241,
                                                            "id": "e94c8798-008f-4049-af6f-c1263374b700"
                                                          },
                                                          {
                                                            "name": "unix mutex_enter",
                                                            "value": 366,
                                                            "id": "43511735-93c7-4018-a1f2-7ab3ded9ecb2"
                                                          },
                                                          {
                                                            "name": "unix mutex_exit",
                                                            "value": 149,
                                                            "id": "187aa1a2-7089-431b-b78e-a447aec1e35e"
                                                          }
                                                        ],
                                                        "name": "genunix kmem_alloc",
                                                        "value": 934,
                                                        "id": "e629373e-1f8a-47e2-8142-a6a34bc70584"
                                                      },
                                                      {
                                                        "name": "genunix kmem_cache_alloc",
                                                        "value": 32,
                                                        "id": "2b9c66dd-0250-4388-aad1-d5fab2e9dc1f"
                                                      }
                                                    ],
                                                    "name": "genunix vn_setpath",
                                                    "value": 1969,
                                                    "id": "0441243e-5212-46aa-9499-6894bb6efb62"
                                                  },
                                                  {
                                                    "children": [
                                                      {
                                                        "name": "genunix crgetmapped",
                                                        "value": 36,
                                                        "id": "34ddd4e8-ca36-44b5-8ff0-0e4e27f89020"
                                                      },
                                                      {
                                                        "children": [
                                                          {
                                                            "name": "genunix crgetmapped",
                                                            "value": 58,
                                                            "id": "613812d8-3a6f-41fa-9fc6-df43409a3c6d"
                                                          },
                                                          {
                                                            "name": "genunix dnlc_lookup",
                                                            "value": 70,
                                                            "id": "80e77df0-7bd8-4df6-a3bf-93b6c839f21a"
                                                          },
                                                          {
                                                            "name": "genunix vn_rele",
                                                            "value": 14,
                                                            "id": "af69b67c-8ca6-4a02-abfe-429a99b950b0"
                                                          },
                                                          {
                                                            "name": "ufs ufs_iaccess",
                                                            "value": 91,
                                                            "id": "b7a3ea59-3a94-4a84-aed9-307eda5d7237"
                                                          },
                                                          {
                                                            "children": [
                                                              {
                                                                "name": "genunix crgetuid",
                                                                "value": 30,
                                                                "id": "ae90ff1b-4ea4-409c-99f2-9dd4ef205354"
                                                              },
                                                              {
                                                                "children": [
                                                                  {
                                                                    "name": "genunix memcmp",
                                                                    "value": 38,
                                                                    "id": "30ce7774-250a-4cca-a93d-2d92e06e28ea"
                                                                  },
                                                                  {
                                                                    "children": [
                                                                      {
                                                                        "name": "genunix memcmp",
                                                                        "value": 277,
                                                                        "id": "8a237863-62dd-4163-8eb3-bf535d9a2898"
                                                                      }
                                                                    ],
                                                                    "name": "unix bcmp",
                                                                    "value": 295,
                                                                    "id": "fbdf7bfe-f6c1-4211-a6a9-e09c344c2213"
                                                                  }
                                                                ],
                                                                "name": "genunix dnlc_lookup",
                                                                "value": 1843,
                                                                "id": "53cc6713-b46a-413f-988d-4904ade11179"
                                                              },
                                                              {
                                                                "name": "genunix secpolicy_vnode_access2",
                                                                "value": 72,
                                                                "id": "44355eb3-57a1-41c2-a6e5-1d7fe6d8dadc"
                                                              },
                                                              {
                                                                "name": "genunix vn_rele",
                                                                "value": 39,
                                                                "id": "5097e296-2e70-49fc-8353-88dfcfaa888f"
                                                              },
                                                              {
                                                                "children": [
                                                                  {
                                                                    "name": "genunix crgetuid",
                                                                    "value": 22,
                                                                    "id": "670d38b1-ffd4-45a8-96d5-331386f47fb9"
                                                                  },
                                                                  {
                                                                    "name": "genunix secpolicy_vnode_access2",
                                                                    "value": 217,
                                                                    "id": "36c3b93c-4825-42ef-8eef-033070219a50"
                                                                  }
                                                                ],
                                                                "name": "ufs ufs_iaccess",
                                                                "value": 648,
                                                                "id": "698065bf-d8b7-4761-a758-c841c4631c80"
                                                              },
                                                              {
                                                                "name": "unix bcmp",
                                                                "value": 42,
                                                                "id": "6097981b-5199-4db7-9eb5-ca78cee2b0c6"
                                                              },
                                                              {
                                                                "name": "unix mutex_enter",
                                                                "value": 980,
                                                                "id": "2cf13825-1100-4e82-8906-680e1fa0ca49"
                                                              },
                                                              {
                                                                "name": "unix mutex_exit",
                                                                "value": 350,
                                                                "id": "ab2a8e93-c9b1-4483-a86c-5e70d7d2dce0"
                                                              },
                                                              {
                                                                "name": "unix rw_enter",
                                                                "value": 525,
                                                                "id": "42012ce8-7337-45fe-aa73-9a50dbe96149"
                                                              },
                                                              {
                                                                "name": "unix rw_exit",
                                                                "value": 439,
                                                                "id": "b1f30acc-48ed-484d-8db0-b6965e2fa564"
                                                              }
                                                            ],
                                                            "name": "ufs ufs_lookup",
                                                            "value": 5399,
                                                            "id": "b8eb9a11-e8ef-478a-b679-80d196c5c3b4"
                                                          }
                                                        ],
                                                        "name": "genunix fop_lookup",
                                                        "value": 6470,
                                                        "id": "cb867458-5016-4d4d-9037-42db148d21a8"
                                                      },
                                                      {
                                                        "name": "genunix kmem_cache_alloc",
                                                        "value": 39,
                                                        "id": "1d32f7f9-d99c-48d1-9b0a-2293a7d264b7"
                                                      },
                                                      {
                                                        "children": [
                                                          {
                                                            "name": "genunix rwst_exit",
                                                            "value": 18,
                                                            "id": "45df4256-9150-4377-8e5e-ebc36aa501e4"
                                                          },
                                                          {
                                                            "name": "genunix rwst_tryenter",
                                                            "value": 32,
                                                            "id": "21edcc4a-7033-4853-a529-995d0b14a546"
                                                          },
                                                          {
                                                            "name": "genunix vn_mountedvfs",
                                                            "value": 11,
                                                            "id": "c71cda62-bc01-4ecf-889d-eabd96a4839c"
                                                          },
                                                          {
                                                            "name": "genunix vn_vfslocks_getlock",
                                                            "value": 62,
                                                            "id": "8eb9c8d7-490b-4bfc-af47-1855139e2499"
                                                          },
                                                          {
                                                            "name": "genunix vn_vfslocks_rele",
                                                            "value": 50,
                                                            "id": "fb2fa4f2-ede1-4c58-ad99-7d03b1a6b042"
                                                          },
                                                          {
                                                            "children": [
                                                              {
                                                                "name": "genunix kmem_alloc",
                                                                "value": 32,
                                                                "id": "3c41a554-9c11-4359-a58f-aff01afe7696"
                                                              },
                                                              {
                                                                "name": "genunix rwst_enter_common",
                                                                "value": 32,
                                                                "id": "7cc7fe16-090a-41f7-a12e-1889e4b31ed4"
                                                              },
                                                              {
                                                                "name": "genunix rwst_init",
                                                                "value": 28,
                                                                "id": "6f014483-40d1-49cb-8bf8-1f3aed6d92bb"
                                                              },
                                                              {
                                                                "children": [
                                                                  {
                                                                    "name": "genunix rwst_enter_common",
                                                                    "value": 264,
                                                                    "id": "dc2ac010-661f-4513-ad79-fd7648ba5d3e"
                                                                  },
                                                                  {
                                                                    "name": "unix mutex_enter",
                                                                    "value": 337,
                                                                    "id": "905f6e73-369e-47f5-8eb6-396323c2d9f0"
                                                                  },
                                                                  {
                                                                    "name": "unix mutex_exit",
                                                                    "value": 105,
                                                                    "id": "1d1e69b0-4b5b-4746-bc20-8f0f480e0f32"
                                                                  }
                                                                ],
                                                                "name": "genunix rwst_tryenter",
                                                                "value": 734,
                                                                "id": "2f9bd7cd-b8de-4f70-b104-cd2b0201bc1a"
                                                              },
                                                              {
                                                                "children": [
                                                                  {
                                                                    "name": "genunix cv_init",
                                                                    "value": 53,
                                                                    "id": "1139bb86-d668-4299-8140-084520b1f233"
                                                                  },
                                                                  {
                                                                    "children": [
                                                                      {
                                                                        "children": [
                                                                          {
                                                                            "name": "genunix kmem_cpu_reload",
                                                                            "value": 2,
                                                                            "id": "b5692a4e-b425-4d3d-ae32-a55d1f2cdbdd"
                                                                          }
                                                                        ],
                                                                        "name": "genunix kmem_cache_alloc",
                                                                        "value": 168,
                                                                        "id": "0800cda7-ed73-48ee-85c3-2341970dc7f3"
                                                                      },
                                                                      {
                                                                        "name": "unix mutex_enter",
                                                                        "value": 379,
                                                                        "id": "7c31ca8e-bccc-4d0a-bf95-f3b636ab13bc"
                                                                      },
                                                                      {
                                                                        "name": "unix mutex_exit",
                                                                        "value": 155,
                                                                        "id": "1c8aa0c1-8124-44f2-aeb0-31acb0fd703a"
                                                                      }
                                                                    ],
                                                                    "name": "genunix kmem_alloc",
                                                                    "value": 795,
                                                                    "id": "57484350-c6b7-4606-849a-253d188102c3"
                                                                  },
                                                                  {
                                                                    "name": "genunix kmem_cache_alloc",
                                                                    "value": 29,
                                                                    "id": "5b74b95d-c730-46a0-997b-a7f283bf5f77"
                                                                  },
                                                                  {
                                                                    "children": [
                                                                      {
                                                                        "name": "genunix cv_init",
                                                                        "value": 65,
                                                                        "id": "713c7472-9f63-43f7-aebb-9157b641a23e"
                                                                      },
                                                                      {
                                                                        "name": "unix mutex_init",
                                                                        "value": 53,
                                                                        "id": "214302fb-d8f3-40ca-a112-e3eb74e47ecc"
                                                                      }
                                                                    ],
                                                                    "name": "genunix rwst_init",
                                                                    "value": 236,
                                                                    "id": "729ddebe-356f-4e6f-9f0d-b8b6137b8a35"
                                                                  },
                                                                  {
                                                                    "name": "unix mutex_init",
                                                                    "value": 46,
                                                                    "id": "729fc7a5-5df4-4cd5-bd40-54702d3fdf26"
                                                                  }
                                                                ],
                                                                "name": "genunix vn_vfslocks_getlock",
                                                                "value": 1357,
                                                                "id": "e0a0af92-f535-4eb5-8f5d-bf650c672da3"
                                                              },
                                                              {
                                                                "name": "unix mutex_enter",
                                                                "value": 727,
                                                                "id": "a94726ad-4d85-4adb-95e8-da1981f69137"
                                                              },
                                                              {
                                                                "name": "unix mutex_exit",
                                                                "value": 371,
                                                                "id": "4dfa5cd0-bf7a-43c7-9187-5c6ddc88c273"
                                                              }
                                                            ],
                                                            "name": "genunix vn_vfsrlock",
                                                            "value": 3342,
                                                            "id": "492e35b8-4af0-44b3-8f54-37b6557e3f2a"
                                                          },
                                                          {
                                                            "children": [
                                                              {
                                                                "name": "genunix cv_broadcast",
                                                                "value": 25,
                                                                "id": "3bc8b2ad-baa9-45c3-af0c-3c5bb18ee9b7"
                                                              },
                                                              {
                                                                "name": "genunix kmem_free",
                                                                "value": 35,
                                                                "id": "a52bee67-c7e5-4391-9573-02c7114bc931"
                                                              },
                                                              {
                                                                "name": "genunix rwst_destroy",
                                                                "value": 32,
                                                                "id": "90295063-e6bb-40ac-89fd-f8cddaa84b54"
                                                              },
                                                              {
                                                                "children": [
                                                                  {
                                                                    "name": "genunix cv_broadcast",
                                                                    "value": 40,
                                                                    "id": "e32d19b0-9ddb-4189-b1a3-bb65c5b1101f"
                                                                  }
                                                                ],
                                                                "name": "genunix rwst_exit",
                                                                "value": 167,
                                                                "id": "08c8b83a-3c91-43ec-8567-b66c93803c4c"
                                                              },
                                                              {
                                                                "name": "genunix vn_vfslocks_getlock",
                                                                "value": 120,
                                                                "id": "c127369d-0e5a-4fac-9185-f9a55524f13e"
                                                              },
                                                              {
                                                                "children": [
                                                                  {
                                                                    "name": "genunix cv_destroy",
                                                                    "value": 77,
                                                                    "id": "0e5b5823-27f9-4736-bc4b-6536d7aa0be8"
                                                                  },
                                                                  {
                                                                    "name": "genunix kmem_cache_free",
                                                                    "value": 22,
                                                                    "id": "2664b2a6-cb08-4a82-b2e1-5fcf0a2e495c"
                                                                  },
                                                                  {
                                                                    "children": [
                                                                      {
                                                                        "name": "genunix kmem_cache_free",
                                                                        "value": 154,
                                                                        "id": "afd50050-6b05-4cb6-a15d-47dd57edeef2"
                                                                      },
                                                                      {
                                                                        "name": "unix mutex_enter",
                                                                        "value": 316,
                                                                        "id": "709a353a-3e99-4050-9f4a-9b2a80c156a3"
                                                                      },
                                                                      {
                                                                        "name": "unix mutex_exit",
                                                                        "value": 148,
                                                                        "id": "a8bd5ffd-12bf-4c0f-a421-8868cec440c2"
                                                                      }
                                                                    ],
                                                                    "name": "genunix kmem_free",
                                                                    "value": 693,
                                                                    "id": "a15de236-45e1-4535-9f47-00d7d804a2ee"
                                                                  },
                                                                  {
                                                                    "children": [
                                                                      {
                                                                        "name": "genunix cv_destroy",
                                                                        "value": 42,
                                                                        "id": "c3439e03-6517-4a1c-9f45-9a8063fb84c1"
                                                                      },
                                                                      {
                                                                        "name": "unix mutex_destroy",
                                                                        "value": 176,
                                                                        "id": "f30c4404-0c09-43e9-a614-75e29cee64f3"
                                                                      }
                                                                    ],
                                                                    "name": "genunix rwst_destroy",
                                                                    "value": 296,
                                                                    "id": "bf12f021-5322-4ca3-96b7-c9ce8e8c23de"
                                                                  },
                                                                  {
                                                                    "name": "unix mutex_destroy",
                                                                    "value": 31,
                                                                    "id": "58aaa5d8-48b7-4731-9dbf-e426fa4d5acb"
                                                                  }
                                                                ],
                                                                "name": "genunix vn_vfslocks_rele",
                                                                "value": 1420,
                                                                "id": "5ef37046-3a15-4192-bf95-1e8c0383fdb6"
                                                              },
                                                              {
                                                                "name": "unix mutex_enter",
                                                                "value": 1202,
                                                                "id": "f9897b5d-4647-495e-9da9-ec12b1878c50"
                                                              },
                                                              {
                                                                "name": "unix mutex_exit",
                                                                "value": 512,
                                                                "id": "2b45366c-a425-404f-84c9-275637ef8339"
                                                              }
                                                            ],
                                                            "name": "genunix vn_vfsunlock",
                                                            "value": 3578,
                                                            "id": "ee75c996-34ba-4b00-aa1e-59d5e7fb8589"
                                                          }
                                                        ],
                                                        "name": "genunix traverse",
                                                        "value": 7243,
                                                        "id": "390dc8d5-3fd1-40f0-ac91-a2a8abc171fe"
                                                      },
                                                      {
                                                        "name": "genunix vfs_getops",
                                                        "value": 21,
                                                        "id": "a4d97e22-718e-4756-965f-399c3f651375"
                                                      },
                                                      {
                                                        "children": [
                                                          {
                                                            "name": "genunix vfs_getops",
                                                            "value": 157,
                                                            "id": "9867d6fe-462f-4bd4-859e-05c2d30d8755"
                                                          },
                                                          {
                                                            "name": "unix membar_consumer",
                                                            "value": 123,
                                                            "id": "9da06620-a7f4-4cff-9329-84f909a5f03c"
                                                          }
                                                        ],
                                                        "name": "genunix vfs_matchops",
                                                        "value": 336,
                                                        "id": "4d13fa1e-9d38-411b-ba12-7b019a472f0e"
                                                      },
                                                      {
                                                        "name": "genunix vn_alloc",
                                                        "value": 20,
                                                        "id": "b48f7371-7ed5-4710-ba1f-27f558a6a5e4"
                                                      },
                                                      {
                                                        "name": "genunix vn_exists",
                                                        "value": 17,
                                                        "id": "f9c01196-b29a-493e-ad67-1d316cecbc4b"
                                                      },
                                                      {
                                                        "name": "genunix vn_mountedvfs",
                                                        "value": 30,
                                                        "id": "9df687d8-1266-4a68-9409-3e3054a717bf"
                                                      },
                                                      {
                                                        "name": "genunix vn_setops",
                                                        "value": 41,
                                                        "id": "2df30347-5e55-4f91-8059-ef21b49fd358"
                                                      },
                                                      {
                                                        "name": "genunix vn_vfsrlock",
                                                        "value": 13,
                                                        "id": "ef84b242-6dd6-49e6-8467-77f0d6589f1b"
                                                      },
                                                      {
                                                        "name": "genunix vn_vfsunlock",
                                                        "value": 40,
                                                        "id": "910b89e7-5ef1-479a-a6eb-6c85ddb7504e"
                                                      },
                                                      {
                                                        "name": "lofs lfind",
                                                        "value": 26,
                                                        "id": "0148f1c1-8ac9-4272-9cb8-155ce1e11022"
                                                      },
                                                      {
                                                        "name": "lofs lsave",
                                                        "value": 27,
                                                        "id": "bd97cde8-58a6-4cf2-a22b-a9b9c25fd0be"
                                                      },
                                                      {
                                                        "name": "lofs makelfsnode",
                                                        "value": 28,
                                                        "id": "4a626694-f894-4e81-865e-4c31a5be62b7"
                                                      },
                                                      {
                                                        "children": [
                                                          {
                                                            "name": "genunix kmem_cache_alloc",
                                                            "value": 234,
                                                            "id": "322f716e-f06d-44ea-8e99-7107e4fb3f5c"
                                                          },
                                                          {
                                                            "name": "genunix kmem_cpu_reload",
                                                            "value": 1,
                                                            "id": "de6a889d-70e9-4d87-bad9-6f42de5bdb2c"
                                                          },
                                                          {
                                                            "children": [
                                                              {
                                                                "name": "genunix kmem_cache_alloc",
                                                                "value": 179,
                                                                "id": "c3a5eb82-e772-4aae-b91e-28bedb236f0f"
                                                              },
                                                              {
                                                                "name": "genunix vn_recycle",
                                                                "value": 33,
                                                                "id": "005f31ff-e843-4339-9094-ec22212fb228"
                                                              },
                                                              {
                                                                "children": [
                                                                  {
                                                                    "children": [
                                                                      {
                                                                        "name": "genunix vsd_free",
                                                                        "value": 155,
                                                                        "id": "e3b86e58-be9f-4106-9a98-e7289b6d109f"
                                                                      }
                                                                    ],
                                                                    "name": "genunix vn_recycle",
                                                                    "value": 319,
                                                                    "id": "42a3a4aa-24be-4b5b-8453-2ef30abc7a04"
                                                                  },
                                                                  {
                                                                    "name": "genunix vsd_free",
                                                                    "value": 14,
                                                                    "id": "17ee9939-ceb8-43a9-90a8-9dfb7a95e149"
                                                                  }
                                                                ],
                                                                "name": "genunix vn_reinit",
                                                                "value": 424,
                                                                "id": "6fd36c6d-fd46-42a6-8c9e-bda486860ae6"
                                                              },
                                                              {
                                                                "name": "unix mutex_enter",
                                                                "value": 318,
                                                                "id": "4845e0ec-971e-4a4f-b5d5-d192fb3e1404"
                                                              },
                                                              {
                                                                "name": "unix mutex_exit",
                                                                "value": 142,
                                                                "id": "4588bf5e-13eb-4ffa-a905-dcd8f9f52200"
                                                              }
                                                            ],
                                                            "name": "genunix vn_alloc",
                                                            "value": 1189,
                                                            "id": "719dc23e-7258-46e4-8203-f2cd5d006ff6"
                                                          },
                                                          {
                                                            "name": "genunix vn_exists",
                                                            "value": 50,
                                                            "id": "b4b573e1-cf48-46f7-8697-d7bba9f04c38"
                                                          },
                                                          {
                                                            "name": "genunix vn_reinit",
                                                            "value": 48,
                                                            "id": "306e81d1-fb69-4946-87ba-006919ece06b"
                                                          },
                                                          {
                                                            "name": "genunix vn_setops",
                                                            "value": 160,
                                                            "id": "942aa72e-b9e8-4c93-a656-7df62b3c1580"
                                                          },
                                                          {
                                                            "name": "lofs lfind",
                                                            "value": 278,
                                                            "id": "8d63eb8a-eae0-4f9b-8c1c-87830bdea3bb"
                                                          },
                                                          {
                                                            "name": "lofs lsave",
                                                            "value": 162,
                                                            "id": "58beba1c-999d-418e-bdad-24e9c6613a94"
                                                          },
                                                          {
                                                            "name": "lofs makelfsnode",
                                                            "value": 82,
                                                            "id": "23dc0a9e-39d7-4c73-98e4-928ecc3cddb1"
                                                          },
                                                          {
                                                            "name": "lofs table_lock_enter",
                                                            "value": 220,
                                                            "id": "d2c71ac2-5b80-4112-9b40-a7855b0923ce"
                                                          },
                                                          {
                                                            "name": "unix atomic_cas_64",
                                                            "value": 318,
                                                            "id": "78e047ec-16f5-4fe8-aa2b-ae26b296dc8d"
                                                          },
                                                          {
                                                            "name": "unix membar_consumer",
                                                            "value": 237,
                                                            "id": "d9ff317f-982b-418c-a4b7-fd1257744cce"
                                                          },
                                                          {
                                                            "name": "unix mutex_enter",
                                                            "value": 640,
                                                            "id": "f29206c5-b47a-4ef0-a1e8-7e4931e6ed3f"
                                                          },
                                                          {
                                                            "name": "unix mutex_exit",
                                                            "value": 138,
                                                            "id": "bc2e2b72-51db-4c5c-88c4-d46165dbcef4"
                                                          }
                                                        ],
                                                        "name": "lofs makelonode",
                                                        "value": 4212,
                                                        "id": "0f877b23-e5d6-47b5-8fc9-6a03407e7d06"
                                                      },
                                                      {
                                                        "name": "lofs table_lock_enter",
                                                        "value": 43,
                                                        "id": "0aeb2d68-679c-42a7-aea1-465d11440b90"
                                                      },
                                                      {
                                                        "name": "ufs ufs_lookup",
                                                        "value": 46,
                                                        "id": "95d9efb7-d8de-4a7f-b208-e1086e1f65ab"
                                                      },
                                                      {
                                                        "name": "unix atomic_add_32",
                                                        "value": 325,
                                                        "id": "6c69fe4d-b15d-4dae-b3e0-52544bcde559"
                                                      },
                                                      {
                                                        "name": "unix mutex_exit",
                                                        "value": 26,
                                                        "id": "16f8be71-9564-4562-af72-31e5acb17f7c"
                                                      }
                                                    ],
                                                    "name": "lofs lo_lookup",
                                                    "value": 19887,
                                                    "id": "ca17bc13-9201-4055-9fd6-e24fcd19c32a"
                                                  },
                                                  {
                                                    "name": "lofs makelonode",
                                                    "value": 39,
                                                    "id": "d2bf8c23-a667-4143-8af9-9ca80f29b190"
                                                  },
                                                  {
                                                    "name": "unix bcopy",
                                                    "value": 896,
                                                    "id": "7ee42001-7a84-4e1d-b12f-c454e7248812"
                                                  },
                                                  {
                                                    "name": "unix mutex_enter",
                                                    "value": 947,
                                                    "id": "579db000-21af-4c1a-8251-0fa9db9848d2"
                                                  },
                                                  {
                                                    "name": "unix mutex_exit",
                                                    "value": 337,
                                                    "id": "0652c65b-6bd5-491d-b90c-9ec1a608e912"
                                                  },
                                                  {
                                                    "children": [
                                                      {
                                                        "children": [
                                                          {
                                                            "children": [
                                                              {
                                                                "name": "unix dispatch_hilevel",
                                                                "value": 1,
                                                                "id": "4e1e4819-89ec-48e3-b497-4891e4749991"
                                                              }
                                                            ],
                                                            "name": "unix do_interrupt",
                                                            "value": 1,
                                                            "id": "6efe3953-0bde-46a3-ae38-b25decfdd4ec"
                                                          }
                                                        ],
                                                        "name": "unix _interrupt",
                                                        "value": 1,
                                                        "id": "20fe8d9d-663d-4cb4-9dd3-558916f2386e"
                                                      }
                                                    ],
                                                    "name": "unix strlen",
                                                    "value": 2659,
                                                    "id": "03344a70-6eb3-453f-8a24-897b33310815"
                                                  },
                                                  {
                                                    "name": "zfs specvp_check",
                                                    "value": 10,
                                                    "id": "23edf53e-9c56-4a8b-8394-7e73b33867bf"
                                                  },
                                                  {
                                                    "name": "zfs zfs_fastaccesschk_execute",
                                                    "value": 4,
                                                    "id": "4c429124-49a4-424b-a36f-c855687b15cf"
                                                  },
                                                  {
                                                    "children": [
                                                      {
                                                        "name": "genunix crgetuid",
                                                        "value": 6,
                                                        "id": "8fa2c88c-b38a-4113-b48a-49ed563e9e40"
                                                      },
                                                      {
                                                        "children": [
                                                          {
                                                            "name": "genunix memcmp",
                                                            "value": 3,
                                                            "id": "56078e04-f065-4912-a7a0-c0a505c18eeb"
                                                          },
                                                          {
                                                            "children": [
                                                              {
                                                                "name": "genunix memcmp",
                                                                "value": 38,
                                                                "id": "8374023f-6e3c-469f-9b7d-38290fd7486e"
                                                              }
                                                            ],
                                                            "name": "unix bcmp",
                                                            "value": 45,
                                                            "id": "4df2671b-ba95-4ba4-bbc0-753e0a8da57a"
                                                          }
                                                        ],
                                                        "name": "genunix dnlc_lookup",
                                                        "value": 263,
                                                        "id": "f60a38dc-7465-4f6d-8a0b-5cef1e8173ed"
                                                      },
                                                      {
                                                        "name": "unix bcmp",
                                                        "value": 11,
                                                        "id": "964f0cce-81f1-4fbb-8001-19f68a56aefa"
                                                      },
                                                      {
                                                        "name": "unix mutex_enter",
                                                        "value": 309,
                                                        "id": "26c8e48f-658d-46cb-a19d-005c8ef119ea"
                                                      },
                                                      {
                                                        "name": "unix mutex_exit",
                                                        "value": 135,
                                                        "id": "fe5f580c-1fdb-4529-8442-63df5c8eaa28"
                                                      },
                                                      {
                                                        "name": "zfs specvp_check",
                                                        "value": 20,
                                                        "id": "2b3bd5ec-b15c-45c6-ac6e-aad71f0ff8cc"
                                                      },
                                                      {
                                                        "children": [
                                                          {
                                                            "name": "genunix crgetuid",
                                                            "value": 2,
                                                            "id": "e82f6f0e-18f7-4d73-8136-ffa6f3b03a8a"
                                                          }
                                                        ],
                                                        "name": "zfs zfs_fastaccesschk_execute",
                                                        "value": 50,
                                                        "id": "ad53f72e-f3d8-41a5-ba1c-a7e7ea038f10"
                                                      }
                                                    ],
                                                    "name": "zfs zfs_lookup",
                                                    "value": 946,
                                                    "id": "40b79cc6-90ec-45a2-8ef1-74d9549ce034"
                                                  }
                                                ],
                                                "name": "genunix fop_lookup",
                                                "value": 29216,
                                                "id": "9ccf9a48-f596-4087-bd18-5d223b5bf114"
                                              },
                                              {
                                                "name": "genunix fsop_root",
                                                "value": 62,
                                                "id": "4e41a5e7-0915-4ace-9cdd-db08a65bd618"
                                              },
                                              {
                                                "name": "genunix pn_fixslash",
                                                "value": 44,
                                                "id": "9902bf29-da69-4b29-a05a-49167afc7368"
                                              },
                                              {
                                                "name": "genunix pn_getcomponent",
                                                "value": 454,
                                                "id": "8defa4aa-19b4-428b-b813-30777ccee4f1"
                                              },
                                              {
                                                "children": [
                                                  {
                                                    "children": [
                                                      {
                                                        "name": "lofs lo_root",
                                                        "value": 80,
                                                        "id": "3386af0b-2c05-4e3e-85cc-ace9ac3c64e0"
                                                      },
                                                      {
                                                        "name": "unix mutex_enter",
                                                        "value": 95,
                                                        "id": "deda077a-2214-4d46-a668-6768accd2d30"
                                                      },
                                                      {
                                                        "name": "unix mutex_exit",
                                                        "value": 59,
                                                        "id": "6ac2348c-22dc-473c-b349-0407174f141d"
                                                      }
                                                    ],
                                                    "name": "genunix fsop_root",
                                                    "value": 297,
                                                    "id": "50fd86b9-e58f-4fb9-a253-fbc74a2bf465"
                                                  },
                                                  {
                                                    "name": "genunix rwst_exit",
                                                    "value": 12,
                                                    "id": "37c94bdb-91a5-48b8-8757-32e384ac0101"
                                                  },
                                                  {
                                                    "name": "genunix rwst_tryenter",
                                                    "value": 37,
                                                    "id": "44840eb3-2b34-4542-be7a-d841eb13180b"
                                                  },
                                                  {
                                                    "name": "genunix vn_mountedvfs",
                                                    "value": 20,
                                                    "id": "9c72f9d6-b9cc-4a27-9bfc-214e89b0e257"
                                                  },
                                                  {
                                                    "name": "genunix vn_rele",
                                                    "value": 19,
                                                    "id": "071b3780-663e-48fc-a320-d74d82425a2a"
                                                  },
                                                  {
                                                    "name": "genunix vn_vfslocks_getlock",
                                                    "value": 47,
                                                    "id": "4cb8b2c2-d9b6-4146-a0af-211c289128a6"
                                                  },
                                                  {
                                                    "name": "genunix vn_vfslocks_rele",
                                                    "value": 34,
                                                    "id": "3ce2c402-5d82-42ae-9c9b-002860263e29"
                                                  },
                                                  {
                                                    "children": [
                                                      {
                                                        "name": "genunix kmem_alloc",
                                                        "value": 11,
                                                        "id": "ad55a738-0f02-4ee6-94e4-9d453853ed3a"
                                                      },
                                                      {
                                                        "name": "genunix rwst_enter_common",
                                                        "value": 28,
                                                        "id": "db05794a-6348-4980-81d6-0345a02b025b"
                                                      },
                                                      {
                                                        "name": "genunix rwst_init",
                                                        "value": 13,
                                                        "id": "3833ec3e-09cd-4c2f-b81f-6fb0776e0305"
                                                      },
                                                      {
                                                        "children": [
                                                          {
                                                            "name": "genunix rwst_enter_common",
                                                            "value": 314,
                                                            "id": "6a9248b5-7b0e-4a8a-95c8-0d647eb7514c"
                                                          },
                                                          {
                                                            "name": "unix mutex_enter",
                                                            "value": 238,
                                                            "id": "24a5499b-2cbe-42db-8246-1ceceabb1525"
                                                          },
                                                          {
                                                            "name": "unix mutex_exit",
                                                            "value": 49,
                                                            "id": "d956a033-773d-4d4a-a94f-e641d097f4e1"
                                                          }
                                                        ],
                                                        "name": "genunix rwst_tryenter",
                                                        "value": 628,
                                                        "id": "00002e42-23c9-4c53-8343-73ff3d3f354b"
                                                      },
                                                      {
                                                        "children": [
                                                          {
                                                            "name": "genunix cv_init",
                                                            "value": 56,
                                                            "id": "ba05b8df-fbe0-46c9-a0e7-3d2ebceba08a"
                                                          },
                                                          {
                                                            "children": [
                                                              {
                                                                "name": "genunix kmem_cache_alloc",
                                                                "value": 126,
                                                                "id": "4f5d975c-13c1-4fe1-8268-e70e84a2de6e"
                                                              },
                                                              {
                                                                "name": "unix mutex_enter",
                                                                "value": 252,
                                                                "id": "22f165e2-c9de-41d8-90e7-76679c97d097"
                                                              },
                                                              {
                                                                "name": "unix mutex_exit",
                                                                "value": 95,
                                                                "id": "a8b690a6-b393-4a08-ad85-661cc28a5289"
                                                              }
                                                            ],
                                                            "name": "genunix kmem_alloc",
                                                            "value": 533,
                                                            "id": "a78c761b-bbe3-4b86-a120-3a97ad8ef7fe"
                                                          },
                                                          {
                                                            "name": "genunix kmem_cache_alloc",
                                                            "value": 17,
                                                            "id": "9e2ec19f-0826-4481-8196-9be7ea706763"
                                                          },
                                                          {
                                                            "children": [
                                                              {
                                                                "name": "genunix cv_init",
                                                                "value": 49,
                                                                "id": "859985b6-f6d8-4016-8cfd-09c659cb3cfd"
                                                              },
                                                              {
                                                                "name": "unix mutex_init",
                                                                "value": 38,
                                                                "id": "e9b2d40c-13d4-4457-a072-c2f3d63a1fa2"
                                                              }
                                                            ],
                                                            "name": "genunix rwst_init",
                                                            "value": 173,
                                                            "id": "95fd78c1-aa88-491c-b729-4f16236383da"
                                                          },
                                                          {
                                                            "name": "unix mutex_init",
                                                            "value": 31,
                                                            "id": "8a9001ca-4768-4de9-91c2-10501c93746b"
                                                          }
                                                        ],
                                                        "name": "genunix vn_vfslocks_getlock",
                                                        "value": 973,
                                                        "id": "aa085d32-2dbf-4d77-bb7f-4b5030828bf6"
                                                      },
                                                      {
                                                        "name": "unix mutex_enter",
                                                        "value": 455,
                                                        "id": "7cf6f689-6947-444e-9cae-796f092ac89e"
                                                      },
                                                      {
                                                        "name": "unix mutex_exit",
                                                        "value": 250,
                                                        "id": "139463eb-804a-4c70-bb9e-283aa9159eb5"
                                                      }
                                                    ],
                                                    "name": "genunix vn_vfsrlock",
                                                    "value": 2414,
                                                    "id": "1231ccfe-a96d-47f2-8d07-248c92535bad"
                                                  },
                                                  {
                                                    "children": [
                                                      {
                                                        "name": "genunix cv_broadcast",
                                                        "value": 14,
                                                        "id": "941e43dd-e1a2-4aa5-8831-bff7d4a86a4c"
                                                      },
                                                      {
                                                        "name": "genunix kmem_free",
                                                        "value": 17,
                                                        "id": "adf1b9cf-5886-4141-b32c-ee6b3618730c"
                                                      },
                                                      {
                                                        "name": "genunix rwst_destroy",
                                                        "value": 20,
                                                        "id": "d35195df-9ce5-4091-aa26-a0ad4ee62dd9"
                                                      },
                                                      {
                                                        "children": [
                                                          {
                                                            "name": "genunix cv_broadcast",
                                                            "value": 19,
                                                            "id": "29d92bbd-b75a-4f41-bef9-313377419d46"
                                                          }
                                                        ],
                                                        "name": "genunix rwst_exit",
                                                        "value": 110,
                                                        "id": "a599b768-398f-4abe-9243-0f15d251853c"
                                                      },
                                                      {
                                                        "name": "genunix vn_vfslocks_getlock",
                                                        "value": 79,
                                                        "id": "9ba7dd6d-beae-44e6-9a40-8b33a20defd5"
                                                      },
                                                      {
                                                        "children": [
                                                          {
                                                            "name": "genunix cv_destroy",
                                                            "value": 81,
                                                            "id": "a39d3caf-98e3-4b40-92b0-583d7b3fb5ba"
                                                          },
                                                          {
                                                            "name": "genunix kmem_cache_free",
                                                            "value": 18,
                                                            "id": "6e8561cb-9a0e-4ba3-81c5-b833f4c1831c"
                                                          },
                                                          {
                                                            "children": [
                                                              {
                                                                "name": "genunix kmem_cache_free",
                                                                "value": 116,
                                                                "id": "578a8cd5-08ad-4a91-a33b-5108f4aab269"
                                                              },
                                                              {
                                                                "name": "unix mutex_enter",
                                                                "value": 195,
                                                                "id": "7dfc88ce-73ad-4bca-ba6f-75a096ca678f"
                                                              },
                                                              {
                                                                "name": "unix mutex_exit",
                                                                "value": 90,
                                                                "id": "09af65bc-d345-4302-aa96-382927c5eadc"
                                                              }
                                                            ],
                                                            "name": "genunix kmem_free",
                                                            "value": 457,
                                                            "id": "beb241a1-167d-4842-919b-094bc402e298"
                                                          },
                                                          {
                                                            "children": [
                                                              {
                                                                "name": "genunix cv_destroy",
                                                                "value": 31,
                                                                "id": "f478f236-6fb6-4776-b823-9675ad02bddd"
                                                              },
                                                              {
                                                                "name": "unix mutex_destroy",
                                                                "value": 53,
                                                                "id": "6ecd962e-c977-4982-8783-2268c115bc74"
                                                              }
                                                            ],
                                                            "name": "genunix rwst_destroy",
                                                            "value": 146,
                                                            "id": "e6af8223-b0b5-42b5-9320-88396743b470"
                                                          },
                                                          {
                                                            "name": "unix mutex_destroy",
                                                            "value": 17,
                                                            "id": "4a98a760-2732-4bf6-874f-59467e9d0c7d"
                                                          }
                                                        ],
                                                        "name": "genunix vn_vfslocks_rele",
                                                        "value": 903,
                                                        "id": "cfc330c8-7984-4d97-848f-1c7d9572f896"
                                                      },
                                                      {
                                                        "name": "unix mutex_enter",
                                                        "value": 823,
                                                        "id": "986fd595-7886-4b35-9fd5-f2e326ae28a0"
                                                      },
                                                      {
                                                        "name": "unix mutex_exit",
                                                        "value": 356,
                                                        "id": "56a166cb-94e2-40fe-aaa0-cffb892a019e"
                                                      }
                                                    ],
                                                    "name": "genunix vn_vfsunlock",
                                                    "value": 2372,
                                                    "id": "9f5ff3fb-2029-4ee7-870a-a8704f96f326"
                                                  },
                                                  {
                                                    "name": "lofs lo_root",
                                                    "value": 31,
                                                    "id": "3ae778de-fa04-43b1-b4a1-cc49c50266bc"
                                                  },
                                                  {
                                                    "name": "unix mutex_enter",
                                                    "value": 95,
                                                    "id": "a17540fd-85a9-415f-aed8-ad958f6a6c85"
                                                  },
                                                  {
                                                    "name": "unix mutex_exit",
                                                    "value": 56,
                                                    "id": "c7e3a2a1-bc02-41b8-bcee-2012f7828fbe"
                                                  }
                                                ],
                                                "name": "genunix traverse",
                                                "value": 5557,
                                                "id": "1f89dd19-c476-4b09-a286-8044ccceb683"
                                              },
                                              {
                                                "name": "genunix vn_mountedvfs",
                                                "value": 43,
                                                "id": "5d5c4013-ce01-403f-a0da-d0d2e369a6e0"
                                              },
                                              {
                                                "children": [
                                                  {
                                                    "name": "genunix crgetmapped",
                                                    "value": 31,
                                                    "id": "78fdb50e-992c-409b-b095-969e398b34f1"
                                                  },
                                                  {
                                                    "children": [
                                                      {
                                                        "name": "genunix crgetmapped",
                                                        "value": 41,
                                                        "id": "66279e74-c4f6-4599-b211-b399e4478d2a"
                                                      },
                                                      {
                                                        "name": "lofs freelonode",
                                                        "value": 35,
                                                        "id": "82c8c792-fa05-4110-94df-54a72d77404f"
                                                      },
                                                      {
                                                        "children": [
                                                          {
                                                            "name": "genunix kmem_cache_free",
                                                            "value": 29,
                                                            "id": "518a142a-cba3-434e-b4f1-73b364b70e28"
                                                          },
                                                          {
                                                            "name": "genunix vn_free",
                                                            "value": 26,
                                                            "id": "5c06a8b2-e803-410d-92a4-c34cc9600480"
                                                          },
                                                          {
                                                            "name": "genunix vn_invalid",
                                                            "value": 20,
                                                            "id": "b4a59671-3082-420f-94c7-e1c163bc7d2b"
                                                          },
                                                          {
                                                            "name": "genunix vn_rele",
                                                            "value": 25,
                                                            "id": "7d5f1dd0-a75c-4535-b7b2-087d7ce6879e"
                                                          },
                                                          {
                                                            "children": [
                                                              {
                                                                "children": [
                                                                  {
                                                                    "name": "genunix kmem_cpu_reload",
                                                                    "value": 1,
                                                                    "id": "6d59ffb0-6821-41f9-b4df-9f1d815298de"
                                                                  }
                                                                ],
                                                                "name": "genunix kmem_cache_free",
                                                                "value": 184,
                                                                "id": "a1d8b58c-b122-4527-bead-b051041b27e3"
                                                              },
                                                              {
                                                                "name": "genunix kmem_free",
                                                                "value": 115,
                                                                "id": "2a7b224b-92de-42e8-b73d-9ade5cb7576a"
                                                              },
                                                              {
                                                                "children": [
                                                                  {
                                                                    "children": [
                                                                      {
                                                                        "name": "genunix kmem_cpu_reload",
                                                                        "value": 4,
                                                                        "id": "d10f4999-97e2-4b5f-8ef4-b4299c994bb4"
                                                                      }
                                                                    ],
                                                                    "name": "genunix kmem_cache_free",
                                                                    "value": 215,
                                                                    "id": "d77c9af5-983f-4afd-9a65-99b0a3ce0b50"
                                                                  },
                                                                  {
                                                                    "name": "genunix kmem_cpu_reload",
                                                                    "value": 5,
                                                                    "id": "cf8bba7b-13f6-4a4b-9dcf-a084cc46b19e"
                                                                  },
                                                                  {
                                                                    "children": [
                                                                      {
                                                                        "name": "genunix kmem_cache_free",
                                                                        "value": 209,
                                                                        "id": "21c63df6-0df3-4db9-8368-e7844c1457c2"
                                                                      },
                                                                      {
                                                                        "name": "unix mutex_enter",
                                                                        "value": 299,
                                                                        "id": "5bb49346-f2c1-4e4d-9e29-1502926ef932"
                                                                      },
                                                                      {
                                                                        "name": "unix mutex_exit",
                                                                        "value": 160,
                                                                        "id": "5f8e61ad-f6ae-41a7-be00-43461f547ce2"
                                                                      }
                                                                    ],
                                                                    "name": "genunix kmem_free",
                                                                    "value": 785,
                                                                    "id": "e6009b9a-ee73-41f6-9fa3-0067ab41552b"
                                                                  },
                                                                  {
                                                                    "name": "genunix vsd_free",
                                                                    "value": 48,
                                                                    "id": "d7d98ca9-7a62-4b42-a087-b535860de210"
                                                                  },
                                                                  {
                                                                    "name": "unix mutex_enter",
                                                                    "value": 314,
                                                                    "id": "55a14161-380b-4737-9567-434174bb6842"
                                                                  },
                                                                  {
                                                                    "name": "unix mutex_exit",
                                                                    "value": 171,
                                                                    "id": "47ae383d-4866-4fe8-a739-e75deddc7afc"
                                                                  }
                                                                ],
                                                                "name": "genunix vn_free",
                                                                "value": 1663,
                                                                "id": "07e8c635-88bb-4d4f-a1ee-0e005a5827ee"
                                                              },
                                                              {
                                                                "name": "genunix vn_invalid",
                                                                "value": 47,
                                                                "id": "c81e11d5-661c-425c-9373-2f3699f596f8"
                                                              },
                                                              {
                                                                "name": "genunix vn_rele",
                                                                "value": 64,
                                                                "id": "32103cfd-3c6c-4e7d-9f81-c9cf5d77852e"
                                                              },
                                                              {
                                                                "name": "genunix vsd_free",
                                                                "value": 17,
                                                                "id": "efa43c8f-7d70-4d62-b04e-c80e12c23ceb"
                                                              },
                                                              {
                                                                "name": "lofs table_lock_enter",
                                                                "value": 189,
                                                                "id": "3995f25c-7111-4903-a76e-333781ac4fd0"
                                                              },
                                                              {
                                                                "name": "unix membar_consumer",
                                                                "value": 106,
                                                                "id": "58d1b6bb-7b8a-49b1-8c3b-fc4d3d8c93d7"
                                                              },
                                                              {
                                                                "name": "unix mutex_enter",
                                                                "value": 905,
                                                                "id": "f6306c3e-38cc-47d8-93ba-0b517948bf08"
                                                              },
                                                              {
                                                                "name": "unix mutex_exit",
                                                                "value": 358,
                                                                "id": "8524a419-cd81-4ccf-987d-e885fceae80c"
                                                              },
                                                              {
                                                                "name": "unix strlen",
                                                                "value": 1238,
                                                                "id": "5b2d2767-df54-47ad-9647-afe98f8f95c8"
                                                              }
                                                            ],
                                                            "name": "lofs freelonode",
                                                            "value": 5313,
                                                            "id": "d3ceadb7-e251-4ee1-8043-2d9956b5f180"
                                                          },
                                                          {
                                                            "name": "lofs table_lock_enter",
                                                            "value": 44,
                                                            "id": "56a51e5b-10bc-4d20-ab9d-d7c040da1125"
                                                          },
                                                          {
                                                            "name": "unix atomic_add_32",
                                                            "value": 292,
                                                            "id": "7c0d651e-58e3-4a6b-a4b9-e23404f115f7"
                                                          },
                                                          {
                                                            "name": "unix mutex_enter",
                                                            "value": 279,
                                                            "id": "df369a42-b490-4d7c-a797-2e19afe5c605"
                                                          },
                                                          {
                                                            "name": "unix mutex_exit",
                                                            "value": 212,
                                                            "id": "d85b821e-cbd2-4cfb-a34b-3b5e2c67b85e"
                                                          }
                                                        ],
                                                        "name": "lofs lo_inactive",
                                                        "value": 6307,
                                                        "id": "d0f64677-976c-4f24-8e04-0a22f1aaf377"
                                                      }
                                                    ],
                                                    "name": "genunix fop_inactive",
                                                    "value": 6689,
                                                    "id": "e32482aa-304e-4709-8474-a1a4481caba5"
                                                  },
                                                  {
                                                    "name": "lofs lo_inactive",
                                                    "value": 21,
                                                    "id": "8f9b11ef-888c-4d18-a64c-1e9f89bed4b3"
                                                  }
                                                ],
                                                "name": "genunix vn_rele",
                                                "value": 6943,
                                                "id": "ef63f48a-f2c3-4f8a-b65a-4b80522641f1"
                                              },
                                              {
                                                "name": "genunix vn_setpath",
                                                "value": 58,
                                                "id": "d414dcf4-1755-4111-8cba-6db54340a1db"
                                              },
                                              {
                                                "name": "genunix vn_vfsrlock",
                                                "value": 12,
                                                "id": "20291737-a61b-4356-8cbd-2ec5b341498b"
                                              },
                                              {
                                                "name": "genunix vn_vfsunlock",
                                                "value": 20,
                                                "id": "dbdae0dd-c611-4a26-a61b-4579236038bf"
                                              },
                                              {
                                                "name": "lofs lo_lookup",
                                                "value": 65,
                                                "id": "28aa3ebf-e94a-411d-9a7f-f7df980e1a21"
                                              },
                                              {
                                                "name": "unix mutex_enter",
                                                "value": 575,
                                                "id": "aa3da954-6f36-423e-9a3d-55e9a648bf13"
                                              },
                                              {
                                                "name": "unix mutex_exit",
                                                "value": 379,
                                                "id": "7ec114d4-1dc2-4dc3-a77d-832a2561ca43"
                                              },
                                              {
                                                "name": "unix strlen",
                                                "value": 107,
                                                "id": "190208c4-e5dd-4d77-892a-30adaf6bddb7"
                                              },
                                              {
                                                "name": "zfs zfs_lookup",
                                                "value": 22,
                                                "id": "3e12db99-383d-45bf-8275-9f0c2b8ed9c4"
                                              }
                                            ],
                                            "name": "genunix lookuppnvp",
                                            "value": 44242,
                                            "id": "9ec7a385-4654-4792-ad3c-2e52347c071f"
                                          },
                                          {
                                            "name": "genunix pn_fixslash",
                                            "value": 14,
                                            "id": "ab579366-257f-432b-882a-f9bcf0cc0a9a"
                                          },
                                          {
                                            "name": "genunix pn_getcomponent",
                                            "value": 41,
                                            "id": "ae137295-d4c0-40d5-b3da-bf49edde9ecc"
                                          },
                                          {
                                            "name": "genunix traverse",
                                            "value": 17,
                                            "id": "3e92a477-f28f-4363-a7cc-d49a173e7d7f"
                                          },
                                          {
                                            "name": "genunix vn_mountedvfs",
                                            "value": 56,
                                            "id": "1b87fc1d-fef3-4614-b6cc-e6691f88327b"
                                          },
                                          {
                                            "name": "genunix vn_rele",
                                            "value": 73,
                                            "id": "e95fdfd2-4fb6-4307-8471-50c139c267db"
                                          },
                                          {
                                            "children": [
                                              {
                                                "name": "unix mutex_delay_default",
                                                "value": 1,
                                                "id": "a91220c7-1e91-46b9-bd1d-8154c8a9c304"
                                              },
                                              {
                                                "name": "unix tsc_read",
                                                "value": 1,
                                                "id": "dfff3909-5adf-4556-a446-132d20fa8da9"
                                              }
                                            ],
                                            "name": "unix mutex_vector_enter",
                                            "value": 2,
                                            "id": "f7b12ca0-4a4b-43b5-a2f0-2d1a3bdd00ce"
                                          }
                                        ],
                                        "name": "genunix lookuppnatcred",
                                        "value": 44681,
                                        "id": "d14ed328-2a9f-451d-a7f4-a257f70b7d8a"
                                      },
                                      {
                                        "name": "genunix lookuppnvp",
                                        "value": 10,
                                        "id": "3ae57200-bf78-4a91-9693-cf22259f432d"
                                      },
                                      {
                                        "children": [
                                          {
                                            "name": "unix copyinstr",
                                            "value": 25,
                                            "id": "b2a913d8-b3af-4903-b08a-8984ecbb8de8"
                                          },
                                          {
                                            "name": "unix copystr",
                                            "value": 598,
                                            "id": "6d096f54-7d91-45a8-a35b-72ee74ed5fe4"
                                          }
                                        ],
                                        "name": "genunix pn_get_buf",
                                        "value": 687,
                                        "id": "4304a1b0-97df-412f-bd26-225b3c23e3b3"
                                      },
                                      {
                                        "name": "unix copyinstr",
                                        "value": 18,
                                        "id": "86e3dae7-75c5-42eb-ae19-8296676dfa93"
                                      },
                                      {
                                        "name": "unix mutex_enter",
                                        "value": 320,
                                        "id": "16fd576b-8529-469d-803b-cdade40c64b5"
                                      },
                                      {
                                        "name": "unix mutex_exit",
                                        "value": 163,
                                        "id": "d29ca990-f904-485c-809e-d8acfc194897"
                                      }
                                    ],
                                    "name": "genunix lookupnameatcred",
                                    "value": 45978,
                                    "id": "89ce7522-0eb7-44d4-b889-bb1a13f51106"
                                  },
                                  {
                                    "name": "genunix lookuppnatcred",
                                    "value": 12,
                                    "id": "422dc123-9e1b-4805-a318-f9b681e1c645"
                                  },
                                  {
                                    "name": "genunix pn_get_buf",
                                    "value": 13,
                                    "id": "70deac83-6b90-4d03-806e-ca9499bb78cb"
                                  }
                                ],
                                "name": "genunix lookupnameat",
                                "value": 46075,
                                "id": "0a5d9655-c556-4808-91fa-7fe8c0e25ca5"
                              },
                              {
                                "name": "genunix lookupnameatcred",
                                "value": 22,
                                "id": "4da21705-d19d-4354-bb71-ac9fa0515906"
                              }
                            ],
                            "name": "genunix vn_openat",
                            "value": 46342,
                            "id": "7a3134f1-4410-4f1b-899b-ac99e0f0a35a"
                          },
                          {
                            "name": "unix mutex_enter",
                            "value": 303,
                            "id": "178376b5-74d0-4a2a-ab5c-7300d7affb76"
                          },
                          {
                            "name": "unix mutex_exit",
                            "value": 38,
                            "id": "1f092bb9-f47c-41e7-9083-75404f7812d5"
                          }
                        ],
                        "name": "genunix copen",
                        "value": 49444,
                        "id": "de1eb1a3-fec0-44fe-911f-ab84fead0871"
                      },
                      {
                        "name": "genunix falloc",
                        "value": 36,
                        "id": "353917da-6143-497b-87ee-41977ab1c718"
                      },
                      {
                        "name": "genunix set_errno",
                        "value": 9,
                        "id": "ba03f485-9260-4959-a815-824d5e106900"
                      },
                      {
                        "name": "genunix setf",
                        "value": 16,
                        "id": "605999dc-a6ee-4295-9ac8-d9187605f3d3"
                      },
                      {
                        "name": "genunix unfalloc",
                        "value": 39,
                        "id": "3c74eea0-1a17-4d72-a4d8-4afabeca9faf"
                      },
                      {
                        "name": "genunix vn_openat",
                        "value": 14,
                        "id": "4cee8747-dd4e-4b3c-b4bc-d46ef75279a3"
                      }
                    ],
                    "name": "genunix openat",
                    "value": 49647,
                    "id": "2cb9bd1a-4e20-41eb-b83a-99fc0da01b45"
                  }
                ],
                "name": "genunix open",
                "value": 49669,
                "id": "f245eca3-a5c1-460d-a6d4-0e16f9f4dcc4"
              },
              {
                "name": "genunix openat",
                "value": 17,
                "id": "1eadd3d9-5d98-4a56-8ef2-77e8f4725cb1"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "children": [
                          {
                            "name": "genunix dotoprocs",
                            "value": 1,
                            "id": "ef4f9a07-aba6-454b-85e1-8281519729f2"
                          }
                        ],
                        "name": "genunix doprio",
                        "value": 1,
                        "id": "cc064bb4-5e0b-4a48-be58-574a1bf117d6"
                      }
                    ],
                    "name": "genunix priocntl_common",
                    "value": 1,
                    "id": "98cfa55e-c587-41e8-9973-a7e3e5b9195b"
                  }
                ],
                "name": "genunix priocntlsys",
                "value": 1,
                "id": "2d274b8e-d0d0-4884-9012-741fc87a2304"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "children": [
                          {
                            "children": [
                              {
                                "children": [
                                  {
                                    "children": [
                                      {
                                        "children": [
                                          {
                                            "children": [
                                              {
                                                "name": "genunix dnlc_lookup",
                                                "value": 1,
                                                "id": "ca8ffd48-694d-44b9-9b89-d62d85314d45"
                                              }
                                            ],
                                            "name": "ufs ufs_lookup",
                                            "value": 1,
                                            "id": "fc4cf152-8f4e-4aa5-be96-7567fd2d6ee0"
                                          }
                                        ],
                                        "name": "genunix fop_lookup",
                                        "value": 1,
                                        "id": "ec8daf03-8b20-48ce-9eb9-ea5e2e54e75e"
                                      }
                                    ],
                                    "name": "lofs lo_lookup",
                                    "value": 1,
                                    "id": "ce76e9d8-190a-4e60-b671-fd5688ae4168"
                                  }
                                ],
                                "name": "genunix fop_lookup",
                                "value": 1,
                                "id": "3f94a25f-77c7-4aec-a2a2-f7160c4f705b"
                              }
                            ],
                            "name": "genunix lookuppnvp",
                            "value": 1,
                            "id": "dcfdec6d-893e-4da9-9706-2db8176c3a92"
                          }
                        ],
                        "name": "genunix lookuppnatcred",
                        "value": 1,
                        "id": "dc69e914-5716-45d8-a333-1fa9600de949"
                      }
                    ],
                    "name": "genunix lookuppn",
                    "value": 1,
                    "id": "e5a29f1a-0874-4f21-8143-6edfb110753f"
                  }
                ],
                "name": "genunix resolvepath",
                "value": 1,
                "id": "a22bf58b-805a-493a-a05d-9c9bba44b6c6"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "children": [
                          {
                            "children": [
                              {
                                "children": [
                                  {
                                    "children": [
                                      {
                                        "children": [
                                          {
                                            "name": "genunix kmem_cache_free",
                                            "value": 1,
                                            "id": "6acaa650-de49-4a16-872a-d359e5db3a8b"
                                          }
                                        ],
                                        "name": "genunix kmem_free",
                                        "value": 1,
                                        "id": "7f95fc1e-fe68-49f2-bf3c-6cc7c4361d72"
                                      }
                                    ],
                                    "name": "genunix removectx",
                                    "value": 1,
                                    "id": "18839a21-c7ed-41a5-ba92-d9966371fd33"
                                  }
                                ],
                                "name": "genunix schedctl_lwp_cleanup",
                                "value": 1,
                                "id": "de1b6674-94a0-40c8-a853-04ead3c3b176"
                              }
                            ],
                            "name": "genunix exitlwps",
                            "value": 1,
                            "id": "057d3a99-da36-4616-a167-5d726d78d1b8"
                          },
                          {
                            "children": [
                              {
                                "children": [
                                  {
                                    "children": [
                                      {
                                        "children": [
                                          {
                                            "children": [
                                              {
                                                "children": [
                                                  {
                                                    "children": [
                                                      {
                                                        "name": "unix hment_compare",
                                                        "value": 2,
                                                        "id": "60bc0307-d6eb-4698-bdff-dec584d589b5"
                                                      }
                                                    ],
                                                    "name": "genunix avl_find",
                                                    "value": 2,
                                                    "id": "4ab57416-bab5-4541-b247-5d49c988e4b9"
                                                  }
                                                ],
                                                "name": "unix hment_remove",
                                                "value": 2,
                                                "id": "096f1173-a513-4308-bc8f-9cbc90650244"
                                              },
                                              {
                                                "name": "unix page_numtopp_nolock",
                                                "value": 1,
                                                "id": "e776530d-a2ac-4c2a-a247-6dcc1d9fc41b"
                                              }
                                            ],
                                            "name": "unix hat_pte_unmap",
                                            "value": 3,
                                            "id": "945f97b8-26b6-4196-8c39-37f450043314"
                                          }
                                        ],
                                        "name": "unix hat_unload_callback",
                                        "value": 3,
                                        "id": "3b7c27d6-c03a-4b0a-b1f2-f76d61134bea"
                                      }
                                    ],
                                    "name": "genunix segvn_unmap",
                                    "value": 3,
                                    "id": "228e790d-61ea-4fed-a6f7-5a12f10835b0"
                                  }
                                ],
                                "name": "genunix as_free",
                                "value": 3,
                                "id": "69ed49ea-03dc-4c70-a4c4-96c8d5e3338b"
                              }
                            ],
                            "name": "genunix relvm",
                            "value": 3,
                            "id": "f13d4c99-6b05-457f-a9af-9330ff45ac64"
                          },
                          {
                            "children": [
                              {
                                "children": [
                                  {
                                    "children": [
                                      {
                                        "children": [
                                          {
                                            "name": "genunix vmem_free",
                                            "value": 1,
                                            "id": "6ef35c81-49b1-43f0-903f-ca7fbbe1d2b8"
                                          }
                                        ],
                                        "name": "genunix segkp_release_internal",
                                        "value": 1,
                                        "id": "9892c1d5-b1dd-4f00-9259-ac86eee557d7"
                                      }
                                    ],
                                    "name": "genunix segkp_release",
                                    "value": 1,
                                    "id": "a2cb4021-f0a7-429d-ac34-5b11ee9eac98"
                                  }
                                ],
                                "name": "genunix schedctl_freepage",
                                "value": 1,
                                "id": "8566d055-c73c-4aa9-9115-c8f57d0612bf"
                              }
                            ],
                            "name": "genunix schedctl_proc_cleanup",
                            "value": 1,
                            "id": "78068bee-3278-4752-a8f6-07eaf993db2b"
                          }
                        ],
                        "name": "genunix proc_exit",
                        "value": 5,
                        "id": "ec040275-69e5-4761-91a6-e1021450c711"
                      }
                    ],
                    "name": "genunix exit",
                    "value": 5,
                    "id": "e9d9ea8a-3043-4b04-96da-7a8e05003f88"
                  }
                ],
                "name": "genunix rexit",
                "value": 5,
                "id": "65a5fde2-c96a-4493-a7e8-04c21fc1cfd6"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "name": "unix tsc_gethrtimeunscaled",
                        "value": 43,
                        "id": "2990c2bb-4679-40a3-924f-c6fb78e520e7"
                      },
                      {
                        "name": "unix tsc_read",
                        "value": 367,
                        "id": "ab12868a-7beb-405f-bae6-d8f2725be404"
                      }
                    ],
                    "name": "genunix gethrtime_unscaled",
                    "value": 420,
                    "id": "5b025936-fe2e-4525-b8aa-4ffa8dfc5929"
                  },
                  {
                    "name": "unix tsc_gethrtimeunscaled",
                    "value": 59,
                    "id": "d3a31df8-1a12-4f8f-8cfd-0ccbca627cbf"
                  }
                ],
                "name": "genunix syscall_mstate",
                "value": 1336,
                "id": "46d5d300-6ff3-4e0c-80aa-c98e7889e8dc"
              },
              {
                "name": "unix atomic_add_64",
                "value": 205,
                "id": "0b38a311-dc64-472d-b9e9-0a90a173e609"
              }
            ],
            "name": "unix sys_syscall",
            "value": 51908,
            "id": "87f4e512-d5aa-47a0-be9f-93458bc76970"
          }
        ],
        "name": "root",
        "value": 57412,
        "id": "29509a5f-d6bc-47c9-8828-f93f5bc71d6b"
      }
      return{
        stackTrace
      }
}